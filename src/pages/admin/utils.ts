import camelcase from "camelcase"
import startCase from "lodash/startCase"
import { DateTime } from "luxon"
import { IModelType } from "mobx-state-tree"
import { Query } from "mst-gql"
import pluralize from "pluralize"
import { RootStoreType } from "../../models"
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

export function getModelLink(config: RegisteredModelConfig<any>): string {
  return `/admin/models/${pluralizeModel(config)}`
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

export function getModelListFields(config: RegisteredModelConfig<any>): Array<ModelField> {
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
    { label: "ID", name: "id" },
    ...fields,
    { label: "Created At", name: "createdAt" },
    { label: "Updated At", name: "updatedAt" },
  ]
}

export function getModelListQuery(
  config: RegisteredModelConfig<any>,
  store: RootStoreType,
): Query {
  const listQueryName = `query${pluralize(config.model.name)}`
  return store[listQueryName as keyof RootStoreType]()
}

export function getModelListData(
  config: RegisteredModelConfig<any>,
  data: any,
): Array<{ id: string }> {
  return (data && data[pluralizeModel(config)]) || []
}

export function formatDate(dateStr: string): string {
  return DateTime.fromISO(dateStr).toLocaleString(DateTime.DATETIME_SHORT)
}

export function formatUUID(uuidStr: string): string {
  return `${uuidStr.slice(0, 5)}...${uuidStr.slice(uuidStr.length - 5, uuidStr.length)}`
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
  if (field.name.toLowerCase().endsWith("id")) {
    return formatUUID(value)
  }

  return value
}