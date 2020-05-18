import camelcase from "camelcase"
import startCase from "lodash/startCase"
import { DateTime } from "luxon"
import { IModelType } from "mobx-state-tree"
import { Query } from "mst-gql"
import pluralize from "pluralize"
import { RootStoreType } from "../../models"
import { REGISTERED_MODELS } from "./config"

export function pluralizeModel(model: string | { name: string }): string {
  const typeName = typeof model === "string" ? model : model.name
  const newName = camelcase(typeName)
  const parts = newName.split(/(?=[A-Z])/)
  parts[parts.length - 1] = pluralize(parts[parts.length - 1])
  return parts.join("")
}

export function getModelLink(model: string | { name: string }): string {
  return `/admin/models/${pluralizeModel(model)}`
}

export function getModelFromPlural(plural: string): IModelType<any, any> | undefined {
  return REGISTERED_MODELS.find((model) => pluralizeModel(model) === plural)
}

export type ModelField = {
  label: string
  name: string
}

export function getModelListFields(model: IModelType<any, any>): Array<ModelField> {
  const fields = Object.keys(model.properties)
    .filter((key) => {
      if (
        key === "__typename" ||
        key === "id" ||
        key === "createdAt" ||
        key === "updatedAt"
      ) {
        return false
      }

      const property = model.properties[key] as { name: string }
      return !property.name.includes("reference")
    })
    .map((key) => ({ label: startCase(key), name: key }))

  return [
    { label: "ID", name: "id" },
    ...fields,
    { label: "Created At", name: "createdAt" },
    { label: "Updated At", name: "updatedAt" },
  ]
}

export function getModelListQuery(
  model: IModelType<any, any>,
  store: RootStoreType,
): Query {
  const listQueryName = `query${pluralize(model.name)}`
  return store[listQueryName as keyof RootStoreType]()
}

export function getModelListData(
  model: IModelType<any, any>,
  data: any,
): Array<{ id: string }> {
  return (data && data[pluralizeModel(model)]) || []
}

export function formatDate(dateStr: string): string {
  return DateTime.fromISO(dateStr).toLocaleString(DateTime.DATETIME_SHORT)
}

export function formatUUID(uuidStr: string): string {
  return `${uuidStr.slice(0, 5)}...${uuidStr.slice(uuidStr.length - 5, uuidStr.length)}`
}

export function formatModelField(
  model: IModelType<any, any>,
  record: any,
  field: ModelField,
): string {
  const value = record[field.name as keyof typeof record]
  if (field.name === "createdAt" || field.name === "updatedAt") {
    return formatDate(value)
  }
  if (field.name.toLowerCase().endsWith("id")) {
    return formatUUID(value)
  }

  return value
}
