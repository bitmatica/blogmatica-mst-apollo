/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { GustoRolesModel, GustoRolesModelType } from "./GustoRolesModel"
import { GustoRolesModelSelector } from "./GustoRolesModel.base"
import { RootStoreType } from "./index"

/**
 * GustoUserBase
 * auto generated base class for the model GustoUserModel.
 */
export const GustoUserModelBase = ModelBase.named("GustoUser")
  .props({
    __typename: types.optional(types.literal("GustoUser"), "GustoUser"),
    email: types.union(types.undefined, types.string),
    roles: types.union(
      types.undefined,
      types.late((): any => GustoRolesModel),
    ),
  })
  .views((self) => ({
    get store() {
      return self.__getStore<RootStoreType>()
    },
  }))

export class GustoUserModelSelector extends QueryBuilder {
  get email() {
    return this.__attr(`email`)
  }
  roles(
    builder?:
      | string
      | GustoRolesModelSelector
      | ((selector: GustoRolesModelSelector) => GustoRolesModelSelector),
  ) {
    return this.__child(`roles`, GustoRolesModelSelector, builder)
  }
}
export function selectFromGustoUser() {
  return new GustoUserModelSelector()
}

export const gustoUserModelPrimitives = selectFromGustoUser().email
