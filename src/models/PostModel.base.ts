/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { IObservableArray } from "mobx"
import { types } from "mobx-state-tree"
import { MSTGQLRef, QueryBuilder, withTypedRefs } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { CommentModel, CommentModelType } from "./CommentModel"
import { CommentModelSelector } from "./CommentModel.base"
import { UserModel, UserModelType } from "./UserModel"
import { UserModelSelector } from "./UserModel.base"
import { RootStoreType } from "./index"


/* The TypeScript type that explicits the refs to other models in order to prevent a circular refs issue */
type Refs = {
  author: UserModelType;
  comments: IObservableArray<CommentModelType>;
}

/**
 * PostBase
 * auto generated base class for the model PostModel.
 */
export const PostModelBase = withTypedRefs<Refs>()(ModelBase
  .named('Post')
  .props({
    __typename: types.optional(types.literal("Post"), "Post"),
    id: types.identifier,
    createdAt: types.union(types.undefined, types.frozen()),
    updatedAt: types.union(types.undefined, types.frozen()),
    title: types.union(types.undefined, types.string),
    body: types.union(types.undefined, types.string),
    author: types.union(types.undefined, MSTGQLRef(types.late((): any => UserModel))),
    comments: types.union(types.undefined, types.array(MSTGQLRef(types.late((): any => CommentModel)))),
    authorId: types.union(types.undefined, types.string),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  })))

export class PostModelSelector extends QueryBuilder {
  get id() { return this.__attr(`id`) }
  get createdAt() { return this.__attr(`createdAt`) }
  get updatedAt() { return this.__attr(`updatedAt`) }
  get title() { return this.__attr(`title`) }
  get body() { return this.__attr(`body`) }
  get authorId() { return this.__attr(`authorId`) }
  author(builder?: string | UserModelSelector | ((selector: UserModelSelector) => UserModelSelector)) { return this.__child(`author`, UserModelSelector, builder) }
  comments(builder?: string | CommentModelSelector | ((selector: CommentModelSelector) => CommentModelSelector)) { return this.__child(`comments`, CommentModelSelector, builder) }
}
export function selectFromPost() {
  return new PostModelSelector()
}

export const postModelPrimitives = selectFromPost().createdAt.updatedAt.title.body.authorId
