/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"

/**
 * GustoCompanyLocationBase
 * auto generated base class for the model GustoCompanyLocationModel.
 */
export const GustoCompanyLocationModelBase = ModelBase.named("GustoCompanyLocation")
  .props({
    __typename: types.optional(
      types.literal("GustoCompanyLocation"),
      "GustoCompanyLocation",
    ),
    id: types.union(types.undefined, types.number),
    version: types.union(types.undefined, types.string),
    company_id: types.union(types.undefined, types.number),
    phone_number: types.union(types.undefined, types.number),
    street_1: types.union(types.undefined, types.string),
    street_2: types.union(types.undefined, types.string),
    city: types.union(types.undefined, types.string),
    state: types.union(types.undefined, types.string),
    zip: types.union(types.undefined, types.number),
    country: types.union(types.undefined, types.string),
  })
  .views((self) => ({
    get store() {
      return self.__getStore<RootStoreType>()
    },
  }))

export class GustoCompanyLocationModelSelector extends QueryBuilder {
  get id() {
    return this.__attr(`id`)
  }
  get version() {
    return this.__attr(`version`)
  }
  get company_id() {
    return this.__attr(`company_id`)
  }
  get phone_number() {
    return this.__attr(`phone_number`)
  }
  get street_1() {
    return this.__attr(`street_1`)
  }
  get street_2() {
    return this.__attr(`street_2`)
  }
  get city() {
    return this.__attr(`city`)
  }
  get state() {
    return this.__attr(`state`)
  }
  get zip() {
    return this.__attr(`zip`)
  }
  get country() {
    return this.__attr(`country`)
  }
}
export function selectFromGustoCompanyLocation() {
  return new GustoCompanyLocationModelSelector()
}

export const gustoCompanyLocationModelPrimitives = selectFromGustoCompanyLocation().version
  .company_id.phone_number.street_1.street_2.city.state.zip.country
