/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { GustoCompanyModel, GustoCompanyModelType } from "./GustoCompanyModel"
import { GustoCompanyModelSelector } from "./GustoCompanyModel.base"
import { RootStoreType } from "./index"

/**
 * GustoRoleBase
 * auto generated base class for the model GustoRoleModel.
 */
export const GustoRoleModelBase = ModelBase.named("GustoRole")
  .props({
    __typename: types.optional(types.literal("GustoRole"), "GustoRole"),
    companies: types.union(
      types.undefined,
      types.array(types.late((): any => GustoCompanyModel)),
    ),
  })
  .views((self) => ({
    get store() {
      return self.__getStore<RootStoreType>()
    },
  }))

export class GustoRoleModelSelector extends QueryBuilder {
  companies(
    builder?:
      | string
      | GustoCompanyModelSelector
      | ((selector: GustoCompanyModelSelector) => GustoCompanyModelSelector),
  ) {
    return this.__child(`companies`, GustoCompanyModelSelector, builder)
  }
}
export function selectFromGustoRole() {
  return new GustoRoleModelSelector()
}

export const gustoRoleModelPrimitives = selectFromGustoRole()
