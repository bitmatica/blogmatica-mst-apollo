/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * DeletionResponseBase
 * auto generated base class for the model DeletionResponseModel.
 */
export const DeletionResponseModelBase = ModelBase
  .named('DeletionResponse')
  .props({
    __typename: types.optional(types.literal("DeletionResponse"), "DeletionResponse"),
    success: types.union(types.undefined, types.boolean),
    message: types.union(types.undefined, types.string),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class DeletionResponseModelSelector extends QueryBuilder {
  get success() { return this.__attr(`success`) }
  get message() { return this.__attr(`message`) }
}
export function selectFromDeletionResponse() {
  return new DeletionResponseModelSelector()
}

export const deletionResponseModelPrimitives = selectFromDeletionResponse().success.message
