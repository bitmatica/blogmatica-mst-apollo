/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { MSTGQLRef, QueryBuilder, withTypedRefs } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { PostModel, PostModelType } from "./PostModel"
import { PostModelSelector } from "./PostModel.base"
import { RootStoreType } from "./index"


/* The TypeScript type that explicits the refs to other models in order to prevent a circular refs issue */
type Refs = {
  post: PostModelType;
}

/**
 * PostCreationResponseBase
 * auto generated base class for the model PostCreationResponseModel.
 */
export const PostCreationResponseModelBase = withTypedRefs<Refs>()(ModelBase
  .named('PostCreationResponse')
  .props({
    __typename: types.optional(types.literal("PostCreationResponse"), "PostCreationResponse"),
    success: types.union(types.undefined, types.boolean),
    message: types.union(types.undefined, types.string),
    post: types.union(types.undefined, types.null, MSTGQLRef(types.late((): any => PostModel))),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  })))

export class PostCreationResponseModelSelector extends QueryBuilder {
  get success() { return this.__attr(`success`) }
  get message() { return this.__attr(`message`) }
  post(builder?: string | PostModelSelector | ((selector: PostModelSelector) => PostModelSelector)) { return this.__child(`post`, PostModelSelector, builder) }
}
export function selectFromPostCreationResponse() {
  return new PostCreationResponseModelSelector()
}

export const postCreationResponseModelPrimitives = selectFromPostCreationResponse().success.message
