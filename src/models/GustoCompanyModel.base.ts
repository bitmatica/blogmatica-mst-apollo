/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import {
  GustoCompanyLocationModel,
  GustoCompanyLocationModelType,
} from "./GustoCompanyLocationModel"
import { GustoCompanyLocationModelSelector } from "./GustoCompanyLocationModel.base"
import { RootStoreType } from "./index"

/**
 * GustoCompanyBase
 * auto generated base class for the model GustoCompanyModel.
 */
export const GustoCompanyModelBase = ModelBase.named("GustoCompany")
  .props({
    __typename: types.optional(types.literal("GustoCompany"), "GustoCompany"),
    id: types.union(types.undefined, types.string),
    name: types.union(types.undefined, types.string),
    trade_name: types.union(types.undefined, types.string),
    ein: types.union(types.undefined, types.string),
    entity_type: types.union(types.undefined, types.string),
    company_status: types.union(types.undefined, types.string),
    locations: types.union(
      types.undefined,
      types.array(types.late((): any => GustoCompanyLocationModel)),
    ),
  })
  .views((self) => ({
    get store() {
      return self.__getStore<RootStoreType>()
    },
  }))

export class GustoCompanyModelSelector extends QueryBuilder {
  get id() {
    return this.__attr(`id`)
  }
  get name() {
    return this.__attr(`name`)
  }
  get trade_name() {
    return this.__attr(`trade_name`)
  }
  get ein() {
    return this.__attr(`ein`)
  }
  get entity_type() {
    return this.__attr(`entity_type`)
  }
  get company_status() {
    return this.__attr(`company_status`)
  }
  locations(
    builder?:
      | string
      | GustoCompanyLocationModelSelector
      | ((
          selector: GustoCompanyLocationModelSelector,
        ) => GustoCompanyLocationModelSelector),
  ) {
    return this.__child(`locations`, GustoCompanyLocationModelSelector, builder)
  }
}
export function selectFromGustoCompany() {
  return new GustoCompanyModelSelector()
}

export const gustoCompanyModelPrimitives = selectFromGustoCompany().name.trade_name.ein
  .entity_type.company_status
