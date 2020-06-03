/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"

/**
 * RefreshTokenResponseBase
 * auto generated base class for the model RefreshTokenResponseModel.
 */
export const RefreshTokenResponseModelBase = ModelBase.named("RefreshTokenResponse")
  .props({
    __typename: types.optional(
      types.literal("RefreshTokenResponse"),
      "RefreshTokenResponse",
    ),
    success: types.union(types.undefined, types.boolean),
    message: types.union(types.undefined, types.string),
    token: types.union(types.undefined, types.null, types.string),
  })
  .views((self) => ({
    get store() {
      return self.__getStore<RootStoreType>()
    },
  }))

export class RefreshTokenResponseModelSelector extends QueryBuilder {
  get success() {
    return this.__attr(`success`)
  }
  get message() {
    return this.__attr(`message`)
  }
  get token() {
    return this.__attr(`token`)
  }
}
export function selectFromRefreshTokenResponse() {
  return new RefreshTokenResponseModelSelector()
}

export const refreshTokenResponseModelPrimitives = selectFromRefreshTokenResponse().success
  .message.token
