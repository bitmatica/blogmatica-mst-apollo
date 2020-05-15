import { Instance } from "mobx-state-tree"
import { GenerateAuthorizationUriResponseModelBase } from "./GenerateAuthorizationUriResponseModel.base"

/* The TypeScript type of an instance of GenerateAuthorizationUriResponseModel */
export interface GenerateAuthorizationUriResponseModelType
  extends Instance<typeof GenerateAuthorizationUriResponseModel.Type> {}

/* A graphql query fragment builders for GenerateAuthorizationUriResponseModel */
export {
  selectFromGenerateAuthorizationUriResponse,
  generateAuthorizationUriResponseModelPrimitives,
  GenerateAuthorizationUriResponseModelSelector,
} from "./GenerateAuthorizationUriResponseModel.base"

/**
 * GenerateAuthorizationUriResponseModel
 */
export const GenerateAuthorizationUriResponseModel = GenerateAuthorizationUriResponseModelBase.actions(
  (self) => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    },
  }),
)
