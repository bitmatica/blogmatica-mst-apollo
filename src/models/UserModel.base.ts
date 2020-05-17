/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { IObservableArray } from "mobx"
import { types } from "mobx-state-tree"
import { MSTGQLRef, QueryBuilder, withTypedRefs } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { CommentModel, CommentModelType } from "./CommentModel"
import { CommentModelSelector } from "./CommentModel.base"
import { PostModel, PostModelType } from "./PostModel"
import { PostModelSelector } from "./PostModel.base"
import { RootStoreType } from "./index"

/* The TypeScript type that explicits the refs to other models in order to prevent a circular refs issue */
type Refs = {
  posts: IObservableArray<PostModelType>
  comments: IObservableArray<CommentModelType>
}

/**
 * UserBase
 * auto generated base class for the model UserModel.
 */
export const UserModelBase = withTypedRefs<Refs>()(
  ModelBase.named("User")
    .props({
      __typename: types.optional(types.literal("User"), "User"),
      id: types.identifier,
      createdAt: types.union(types.undefined, types.frozen()),
      updatedAt: types.union(types.undefined, types.frozen()),
      email: types.union(types.undefined, types.string),
      posts: types.union(
        types.undefined,
        types.array(MSTGQLRef(types.late((): any => PostModel))),
      ),
      comments: types.union(
        types.undefined,
        types.array(MSTGQLRef(types.late((): any => CommentModel))),
      ),
      roles: types.union(types.undefined, types.array(types.string)),
      gustoAccess: types.union(types.undefined, types.boolean),
      profileImageUrl: types.union(types.undefined, types.string),
    })
    .views((self) => ({
      get store() {
        return self.__getStore<RootStoreType>()
      },
    })),
)

export class UserModelSelector extends QueryBuilder {
  get id() {
    return this.__attr(`id`)
  }
  get createdAt() {
    return this.__attr(`createdAt`)
  }
  get updatedAt() {
    return this.__attr(`updatedAt`)
  }
  get email() {
    return this.__attr(`email`)
  }
  get roles() {
    return this.__attr(`roles`)
  }
  get gustoAccess() {
    return this.__attr(`gustoAccess`)
  }
  get profileImageUrl() {
    return this.__attr(`profileImageUrl`)
  }
  posts(
    builder?:
      | string
      | PostModelSelector
      | ((selector: PostModelSelector) => PostModelSelector),
  ) {
    return this.__child(`posts`, PostModelSelector, builder)
  }
  comments(
    builder?:
      | string
      | CommentModelSelector
      | ((selector: CommentModelSelector) => CommentModelSelector),
  ) {
    return this.__child(`comments`, CommentModelSelector, builder)
  }
}
export function selectFromUser() {
  return new UserModelSelector()
}

export const userModelPrimitives = selectFromUser().createdAt.updatedAt.email.roles
  .gustoAccess.profileImageUrl
