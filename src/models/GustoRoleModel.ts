import { Instance } from "mobx-state-tree"
import { GustoRoleModelBase } from "./GustoRoleModel.base"

/* The TypeScript type of an instance of GustoRoleModel */
export interface GustoRoleModelType extends Instance<typeof GustoRoleModel.Type> {}

/* A graphql query fragment builders for GustoRoleModel */
export {
  selectFromGustoRole,
  gustoRoleModelPrimitives,
  GustoRoleModelSelector,
} from "./GustoRoleModel.base"

/**
 * GustoRoleModel
 */
export const GustoRoleModel = GustoRoleModelBase.actions((self) => ({
  // This is an auto-generated example action.
  log() {
    console.log(JSON.stringify(self))
  },
}))
