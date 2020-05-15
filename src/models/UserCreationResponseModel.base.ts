/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { MSTGQLRef, QueryBuilder, withTypedRefs } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { UserModel, UserModelType } from "./UserModel"
import { UserModelSelector } from "./UserModel.base"
import { RootStoreType } from "./index"


/* The TypeScript type that explicits the refs to other models in order to prevent a circular refs issue */
type Refs = {
  user: UserModelType;
}

/**
 * UserCreationResponseBase
 * auto generated base class for the model UserCreationResponseModel.
 */
export const UserCreationResponseModelBase = withTypedRefs<Refs>()(ModelBase
  .named('UserCreationResponse')
  .props({
    __typename: types.optional(types.literal("UserCreationResponse"), "UserCreationResponse"),
    success: types.union(types.undefined, types.boolean),
    message: types.union(types.undefined, types.string),
    user: types.union(types.undefined, types.null, MSTGQLRef(types.late((): any => UserModel))),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  })))

export class UserCreationResponseModelSelector extends QueryBuilder {
  get success() { return this.__attr(`success`) }
  get message() { return this.__attr(`message`) }
  user(builder?: string | UserModelSelector | ((selector: UserModelSelector) => UserModelSelector)) { return this.__child(`user`, UserModelSelector, builder) }
}
export function selectFromUserCreationResponse() {
  return new UserCreationResponseModelSelector()
}

export const userCreationResponseModelPrimitives = selectFromUserCreationResponse().success.message
