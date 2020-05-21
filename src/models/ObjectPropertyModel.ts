import { Instance } from "mobx-state-tree"
import { ObjectPropertyModelBase } from "./ObjectPropertyModel.base"

/* The TypeScript type of an instance of ObjectPropertyModel */
export interface ObjectPropertyModelType
  extends Instance<typeof ObjectPropertyModel.Type> {}

/* A graphql query fragment builders for ObjectPropertyModel */
export {
  selectFromObjectProperty,
  objectPropertyModelPrimitives,
  ObjectPropertyModelSelector,
} from "./ObjectPropertyModel.base"

/**
 * ObjectPropertyModel
 */
export const ObjectPropertyModel = ObjectPropertyModelBase.actions((self) => ({
  // This is an auto-generated example action.
  log() {
    console.log(JSON.stringify(self))
  },
}))
