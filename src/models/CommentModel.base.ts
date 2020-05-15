/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { MSTGQLRef, QueryBuilder, withTypedRefs } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { PostModel, PostModelType } from "./PostModel"
import { PostModelSelector } from "./PostModel.base"
import { UserModel, UserModelType } from "./UserModel"
import { UserModelSelector } from "./UserModel.base"
import { RootStoreType } from "./index"

/* The TypeScript type that explicits the refs to other models in order to prevent a circular refs issue */
type Refs = {
  author: UserModelType
  post: PostModelType
}

/**
 * CommentBase
 * auto generated base class for the model CommentModel.
 */
export const CommentModelBase = withTypedRefs<Refs>()(
  ModelBase.named("Comment")
    .props({
      __typename: types.optional(types.literal("Comment"), "Comment"),
      id: types.identifier,
      createdAt: types.union(types.undefined, types.frozen()),
      updatedAt: types.union(types.undefined, types.frozen()),
      body: types.union(types.undefined, types.string),
      author: types.union(types.undefined, MSTGQLRef(types.late((): any => UserModel))),
      post: types.union(types.undefined, MSTGQLRef(types.late((): any => PostModel))),
      authorId: types.union(types.undefined, types.string),
      postId: types.union(types.undefined, types.string),
    })
    .views((self) => ({
      get store() {
        return self.__getStore<RootStoreType>()
      },
    })),
)

export class CommentModelSelector extends QueryBuilder {
  get id() {
    return this.__attr(`id`)
  }
  get createdAt() {
    return this.__attr(`createdAt`)
  }
  get updatedAt() {
    return this.__attr(`updatedAt`)
  }
  get body() {
    return this.__attr(`body`)
  }
  get authorId() {
    return this.__attr(`authorId`)
  }
  get postId() {
    return this.__attr(`postId`)
  }
  author(
    builder?:
      | string
      | UserModelSelector
      | ((selector: UserModelSelector) => UserModelSelector),
  ) {
    return this.__child(`author`, UserModelSelector, builder)
  }
  post(
    builder?:
      | string
      | PostModelSelector
      | ((selector: PostModelSelector) => PostModelSelector),
  ) {
    return this.__child(`post`, PostModelSelector, builder)
  }
}
export function selectFromComment() {
  return new CommentModelSelector()
}

export const commentModelPrimitives = selectFromComment().createdAt.updatedAt.body.authorId
  .postId
