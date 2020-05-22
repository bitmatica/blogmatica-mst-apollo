/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"

/**
 * ObjectPropertyBase
 * auto generated base class for the model ObjectPropertyModel.
 */
export const ObjectPropertyModelBase = ModelBase.named("ObjectProperty")
  .props({
    __typename: types.optional(types.literal("ObjectProperty"), "ObjectProperty"),
    name: types.union(types.undefined, types.string),
    type: types.union(types.undefined, types.string),
  })
  .views((self) => ({
    get store() {
      return self.__getStore<RootStoreType>()
    },
  }))

export class ObjectPropertyModelSelector extends QueryBuilder {
  get name() {
    return this.__attr(`name`)
  }
  get type() {
    return this.__attr(`type`)
  }
}
export function selectFromObjectProperty() {
  return new ObjectPropertyModelSelector()
}

export const objectPropertyModelPrimitives = selectFromObjectProperty().name.type
