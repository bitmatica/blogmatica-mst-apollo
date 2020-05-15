import { Instance } from "mobx-state-tree"
import { GustoUserModelBase } from "./GustoUserModel.base"

/* The TypeScript type of an instance of GustoUserModel */
export interface GustoUserModelType extends Instance<typeof GustoUserModel.Type> {}

/* A graphql query fragment builders for GustoUserModel */
export {
  selectFromGustoUser,
  gustoUserModelPrimitives,
  GustoUserModelSelector,
} from "./GustoUserModel.base"

/**
 * GustoUserModel
 */
export const GustoUserModel = GustoUserModelBase.actions((self) => ({
  // This is an auto-generated example action.
  log() {
    console.log(JSON.stringify(self))
  },
}))
