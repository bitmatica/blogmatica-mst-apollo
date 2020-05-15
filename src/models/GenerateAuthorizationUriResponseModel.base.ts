/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"

/**
 * GenerateAuthorizationUriResponseBase
 * auto generated base class for the model GenerateAuthorizationUriResponseModel.
 */
export const GenerateAuthorizationUriResponseModelBase = ModelBase.named(
  "GenerateAuthorizationUriResponse",
)
  .props({
    __typename: types.optional(
      types.literal("GenerateAuthorizationUriResponse"),
      "GenerateAuthorizationUriResponse",
    ),
    success: types.union(types.undefined, types.boolean),
    message: types.union(types.undefined, types.string),
    uri: types.union(types.undefined, types.null, types.string),
  })
  .views((self) => ({
    get store() {
      return self.__getStore<RootStoreType>()
    },
  }))

export class GenerateAuthorizationUriResponseModelSelector extends QueryBuilder {
  get success() {
    return this.__attr(`success`)
  }
  get message() {
    return this.__attr(`message`)
  }
  get uri() {
    return this.__attr(`uri`)
  }
}
export function selectFromGenerateAuthorizationUriResponse() {
  return new GenerateAuthorizationUriResponseModelSelector()
}

export const generateAuthorizationUriResponseModelPrimitives = selectFromGenerateAuthorizationUriResponse()
  .success.message.uri
