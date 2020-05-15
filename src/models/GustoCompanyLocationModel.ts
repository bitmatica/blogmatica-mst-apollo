import { Instance } from "mobx-state-tree"
import { GustoCompanyLocationModelBase } from "./GustoCompanyLocationModel.base"

/* The TypeScript type of an instance of GustoCompanyLocationModel */
export interface GustoCompanyLocationModelType
  extends Instance<typeof GustoCompanyLocationModel.Type> {}

/* A graphql query fragment builders for GustoCompanyLocationModel */
export {
  selectFromGustoCompanyLocation,
  gustoCompanyLocationModelPrimitives,
  GustoCompanyLocationModelSelector,
} from "./GustoCompanyLocationModel.base"

/**
 * GustoCompanyLocationModel
 */
export const GustoCompanyLocationModel = GustoCompanyLocationModelBase.actions((self) => ({
  // This is an auto-generated example action.
  log() {
    console.log(JSON.stringify(self))
  },
}))
