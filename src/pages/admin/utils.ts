import camelcase from "camelcase"
import startCase from "lodash/startCase"
import { DateTime } from "luxon"
import { IModelType } from "mobx-state-tree"
import { Query, QueryBuilder } from "mst-gql"
import pluralize from "pluralize"
import React from "react"
import { Link } from "src/components"
import * as Models from "src/models"
import { DeletionResponseModelType, RootStoreType } from "src/models"

import {
  REGISTERED_MODELS,
  RegisteredModelConfig,
  RegisteredModelFieldConfig,
  RegisteredModelFieldConfigMap,
} from "./config"

export function getRegisteredModels(): Array<RegisteredModelConfig<any>> {
  return REGISTERED_MODELS.map((modelOrConfig) => {
    if (Object.keys(modelOrConfig).includes("model")) {
      return modelOrConfig as RegisteredModelConfig<any>
    }

    return {
      model: modelOrConfig as IModelType<any, any>,
    }
  })
}

export function pluralizeModel(config: RegisteredModelConfig<any>): string {
  const typeName = config.model.name
  const newName = camelcase(typeName)
  const parts = newName.split(/(?=[A-Z])/)
  parts[parts.length - 1] = pluralize(parts[parts.length - 1])
  return parts.join("")
}

export function singularModelKey(config: RegisteredModelConfig<any>): string {
  const modelName: string = config.model.name
  return modelName.charAt(0).toLowerCase() + modelName.slice(1)
}

export function getModelListLink(config: RegisteredModelConfig<any>): string {
  return `/admin/models/${pluralizeModel(config)}`
}

export function getModelDetailsLink(
  config: RegisteredModelConfig<any>,
  modelId: string,
): string {
  return `${getModelListLink(config)}/${modelId}`
}

export function getModelFromPlural(plural: string): RegisteredModelConfig<any> | undefined {
  return getRegisteredModels().find((config) => pluralizeModel(config) === plural)
}

export type ModelField = {
  label: string
  name: string
}

export function getFieldConfig<T extends IModelType<any, any>>(
  config: RegisteredModelConfig<T>,
  fieldName: string,
): RegisteredModelFieldConfig<T> {
  const fieldConfigMap = config.fieldConfig || ({} as RegisteredModelFieldConfigMap<T>)
  return fieldConfigMap[fieldName] || ({} as RegisteredModelFieldConfig<T>)
}

export function getModelFields(config: RegisteredModelConfig<any>): Array<ModelField> {
  const fields = Object.keys(config.model.properties)
    .filter((key) => {
      const fieldConfig = getFieldConfig(config, key)
      if (fieldConfig.disabled) {
        return false
      }
      if (
        key === "__typename" ||
        key === "id" ||
        key === "createdAt" ||
        key === "updatedAt"
      ) {
        return false
      }

      const property = config.model.properties[key] as { name: string }
      return !property.name.includes("reference")
    })
    .map((key) => {
      const fieldConfig = getFieldConfig(config, key)
      return { label: startCase(fieldConfig.label || key), name: key }
    })

  return [
    { label: "Id", name: "id" },
    ...fields,
    { label: "Created At", name: "createdAt" },
    { label: "Updated At", name: "updatedAt" },
  ]
}

export type ModelListQuery = () => Query

export function getModelListQuery(
  config: RegisteredModelConfig<any>,
  store: RootStoreType,
): ModelListQuery {
  const listQueryName = `query${pluralize(config.model.name)}`
  return store[listQueryName as keyof RootStoreType]
}

export function getModelListData(
  config: RegisteredModelConfig<any>,
  data: any,
): Array<{ id: string }> {
  return (data && data[pluralizeModel(config)]) || []
}

export type ModelDetailsQuery = (variables: { id: string }) => Query

export function getModelDetailsQuery(
  config: RegisteredModelConfig<any>,
  store: RootStoreType,
): ModelDetailsQuery {
  const detailsQueryName = `query${config.model.name}`
  return store[detailsQueryName as keyof RootStoreType]
}

export type Model = {
  id: string
  createdAt: string
  updatedAt: string
}

export function getModelDetailData(
  config: RegisteredModelConfig<any>,
  data?: any,
): Model | undefined {
  const modelName: string = config.model.name
  const modelKey = modelName.charAt(0).toLowerCase() + modelName.slice(1)
  return data && data[modelKey]
}

export type DeleteModelMutation = (variables: { id: string }) => Query

export function getDeleteModelMutation(
  config: RegisteredModelConfig<any>,
  store: RootStoreType,
): DeleteModelMutation {
  const deleteModelMutation = `mutateDelete${config.model.name}`
  return store[deleteModelMutation as keyof RootStoreType]
}

export function getDeleteModelData(
  config: RegisteredModelConfig<any>,
  data?: any,
): DeletionResponseModelType {
  const modelKey = `delete${config.model.name}`
  return data && data[modelKey]
}

export type CreateModelMutation = (variables: { input: any }) => Query

export function getModelSelectorPrimitives(
  config: RegisteredModelConfig<any>,
): QueryBuilder {
  return Models[
    `${singularModelKey(config)}ModelPrimitives` as keyof typeof Models
  ] as QueryBuilder
}

export function getCreateModelSelector(config: RegisteredModelConfig<any>): string {
  const modelKey = singularModelKey(config)
  const creationResponseSelector =
    Models[`${modelKey}CreationResponseModelPrimitives` as keyof typeof Models]
  return (creationResponseSelector[
    modelKey as keyof typeof creationResponseSelector
  ] as Function)(getModelSelectorPrimitives(config)).toString()
}

export function getCreateModelMutation(
  config: RegisteredModelConfig<any>,
  store: RootStoreType,
): CreateModelMutation {
  const createMutationName = `mutateCreate${config.model.name}`
  const selector = getCreateModelSelector(config)
  return ({ input }): Query => {
    return store[createMutationName as keyof RootStoreType]({ input }, selector)
  }
}

export type CreateModelResponse = {
  success: boolean
  message: string
  id?: string
}

export function getCreateModelData(
  config: RegisteredModelConfig<any>,
  data?: any,
): CreateModelResponse | undefined {
  const modelKey = singularModelKey(config)
  const mutationKey = `create${config.model.name}`
  const response = data && data[mutationKey]
  return {
    ...response,
    id: (response && response[modelKey]?.id) || undefined,
  }
}

export function getCreateModelInput(config: RegisteredModelConfig<any>): string {
  return `Create${config.model.name}Input`
}

export function formatDate(dateStr: string): string {
  return DateTime.fromISO(dateStr).toLocaleString(DateTime.DATETIME_SHORT)
}

export function formatUUID(uuidStr: string): string {
  return `${uuidStr.slice(0, 5)}...${uuidStr.slice(uuidStr.length - 5, uuidStr.length)}`
}

function getReferenceFieldFromId(
  config: RegisteredModelConfig<any>,
  field: ModelField,
): ModelField | undefined {
  const referenceFieldKey = field.name.substr(0, field.name.length - 2)
  return config.model.properties[referenceFieldKey]
}

export function getReferenceType(
  config: RegisteredModelConfig<any>,
  field: ModelField,
): RegisteredModelConfig<any> | undefined {
  const [match] = (field.name as string).match(/".+Model"/) || []
  const referenceModelName = match.replace(/"/g, "")
  return getRegisteredModels().find(
    (model) => `${model.model.name}Model` === referenceModelName,
  )
}

export function formatModelField<T extends IModelType<any, any>>(
  config: RegisteredModelConfig<T>,
  record: any,
  field: ModelField,
): string | JSX.Element {
  const fieldConfig = getFieldConfig(config, field.name)
  if (fieldConfig.format) {
    return fieldConfig.format(record)
  }

  const value = record[field.name as keyof typeof record]
  if (field.name === "createdAt" || field.name === "updatedAt") {
    return formatDate(value)
  }

  if (field.name === "id") {
    return React.createElement(
      Link,
      { to: getModelDetailsLink(config, value) },
      formatUUID(value),
    )
  }

  if (field.name.toLowerCase().endsWith("id")) {
    const referenceField = getReferenceFieldFromId(config, field)
    if (referenceField) {
      const referenceModel = getReferenceType(config, referenceField)
      if (referenceModel) {
        return React.createElement(
          Link,
          { to: getModelDetailsLink(referenceModel, value) },
          formatUUID(value),
        )
      }
    }

    return formatUUID(value)
  }
  return value
}
