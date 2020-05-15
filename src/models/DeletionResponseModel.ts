import { Instance } from "mobx-state-tree"
import { DeletionResponseModelBase } from "./DeletionResponseModel.base"

/* The TypeScript type of an instance of DeletionResponseModel */
export interface DeletionResponseModelType extends Instance<typeof DeletionResponseModel.Type> {}

/* A graphql query fragment builders for DeletionResponseModel */
export { selectFromDeletionResponse, deletionResponseModelPrimitives, DeletionResponseModelSelector } from "./DeletionResponseModel.base"

/**
 * DeletionResponseModel
 */
export const DeletionResponseModel = DeletionResponseModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    },
  }))
