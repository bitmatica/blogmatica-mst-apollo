import { Instance } from "mobx-state-tree"
import { GustoRolesModelBase } from "./GustoRolesModel.base"

/* The TypeScript type of an instance of GustoRolesModel */
export interface GustoRolesModelType extends Instance<typeof GustoRolesModel.Type> {}

/* A graphql query fragment builders for GustoRolesModel */
export {
  selectFromGustoRoles,
  gustoRolesModelPrimitives,
  GustoRolesModelSelector,
} from "./GustoRolesModel.base"

/**
 * GustoRolesModel
 */
export const GustoRolesModel = GustoRolesModelBase.actions((self) => ({
  // This is an auto-generated example action.
  log() {
    console.log(JSON.stringify(self))
  },
}))
