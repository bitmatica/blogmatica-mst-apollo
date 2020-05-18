import camelcase from "camelcase"
import { IModelType } from "mobx-state-tree"
import pluralize from "pluralize"
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
