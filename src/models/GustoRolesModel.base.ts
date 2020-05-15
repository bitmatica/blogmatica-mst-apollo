/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { GustoRoleModel, GustoRoleModelType } from "./GustoRoleModel"
import { GustoRoleModelSelector } from "./GustoRoleModel.base"
import { RootStoreType } from "./index"

/**
 * GustoRolesBase
 * auto generated base class for the model GustoRolesModel.
 */
export const GustoRolesModelBase = ModelBase.named("GustoRoles")
  .props({
    __typename: types.optional(types.literal("GustoRoles"), "GustoRoles"),
    payroll_admin: types.union(
      types.undefined,
      types.late((): any => GustoRoleModel),
    ),
  })
  .views((self) => ({
    get store() {
      return self.__getStore<RootStoreType>()
    },
  }))

export class GustoRolesModelSelector extends QueryBuilder {
  payroll_admin(
    builder?:
      | string
      | GustoRoleModelSelector
      | ((selector: GustoRoleModelSelector) => GustoRoleModelSelector),
  ) {
    return this.__child(`payroll_admin`, GustoRoleModelSelector, builder)
  }
}
export function selectFromGustoRoles() {
  return new GustoRolesModelSelector()
}

export const gustoRolesModelPrimitives = selectFromGustoRoles()
