import { Instance } from "mobx-state-tree"
import { MutationResponseModelBase } from "./MutationResponseModel.base"

/* The TypeScript type of an instance of MutationResponseModel */
export interface MutationResponseModelType
  extends Instance<typeof MutationResponseModel.Type> {}

/* A graphql query fragment builders for MutationResponseModel */
export {
  selectFromMutationResponse,
  mutationResponseModelPrimitives,
  MutationResponseModelSelector,
} from "./MutationResponseModel.base"

/**
 * MutationResponseModel
 */
export const MutationResponseModel = MutationResponseModelBase.actions((self) => ({
  // This is an auto-generated example action.
  log() {
    console.log(JSON.stringify(self))
  },
}))
