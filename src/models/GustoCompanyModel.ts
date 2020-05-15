import { Instance } from "mobx-state-tree"
import { GustoCompanyModelBase } from "./GustoCompanyModel.base"

/* The TypeScript type of an instance of GustoCompanyModel */
export interface GustoCompanyModelType extends Instance<typeof GustoCompanyModel.Type> {}

/* A graphql query fragment builders for GustoCompanyModel */
export {
  selectFromGustoCompany,
  gustoCompanyModelPrimitives,
  GustoCompanyModelSelector,
} from "./GustoCompanyModel.base"

/**
 * GustoCompanyModel
 */
export const GustoCompanyModel = GustoCompanyModelBase.actions((self) => ({
  // This is an auto-generated example action.
  log() {
    console.log(JSON.stringify(self))
  },
}))
