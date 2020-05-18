import camelcase from "camelcase"
import pluralize from "pluralize"

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
