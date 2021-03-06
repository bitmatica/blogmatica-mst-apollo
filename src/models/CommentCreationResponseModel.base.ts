/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { MSTGQLRef, QueryBuilder, withTypedRefs } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { CommentModel, CommentModelType } from "./CommentModel"
import { CommentModelSelector } from "./CommentModel.base"
import { RootStoreType } from "./index"

/* The TypeScript type that explicits the refs to other models in order to prevent a circular refs issue */
type Refs = {
  comment: CommentModelType
}

/**
 * CommentCreationResponseBase
 * auto generated base class for the model CommentCreationResponseModel.
 */
export const CommentCreationResponseModelBase = withTypedRefs<Refs>()(
  ModelBase.named("CommentCreationResponse")
    .props({
      __typename: types.optional(
        types.literal("CommentCreationResponse"),
        "CommentCreationResponse",
      ),
      success: types.union(types.undefined, types.boolean),
      message: types.union(types.undefined, types.string),
      comment: types.union(
        types.undefined,
        types.null,
        MSTGQLRef(types.late((): any => CommentModel)),
      ),
    })
    .views((self) => ({
      get store() {
        return self.__getStore<RootStoreType>()
      },
    })),
)

export class CommentCreationResponseModelSelector extends QueryBuilder {
  get success() {
    return this.__attr(`success`)
  }
  get message() {
    return this.__attr(`message`)
  }
  comment(
    builder?:
      | string
      | CommentModelSelector
      | ((selector: CommentModelSelector) => CommentModelSelector),
  ) {
    return this.__child(`comment`, CommentModelSelector, builder)
  }
}
export function selectFromCommentCreationResponse() {
  return new CommentCreationResponseModelSelector()
}

export const commentCreationResponseModelPrimitives = selectFromCommentCreationResponse()
  .success.message
