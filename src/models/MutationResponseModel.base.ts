/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * MutationResponseBase
 * auto generated base class for the model MutationResponseModel.
 */
export const MutationResponseModelBase = ModelBase
  .named('MutationResponse')
  .props({
    __typename: types.optional(types.literal("MutationResponse"), "MutationResponse"),
    success: types.union(types.undefined, types.boolean),
    message: types.union(types.undefined, types.string),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class MutationResponseModelSelector extends QueryBuilder {
  get success() { return this.__attr(`success`) }
  get message() { return this.__attr(`message`) }
}
export function selectFromMutationResponse() {
  return new MutationResponseModelSelector()
}

export const mutationResponseModelPrimitives = selectFromMutationResponse().success.message
