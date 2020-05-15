import { Instance } from "mobx-state-tree"
import { PostCreationResponseModelBase } from "./PostCreationResponseModel.base"

/* The TypeScript type of an instance of PostCreationResponseModel */
export interface PostCreationResponseModelType extends Instance<typeof PostCreationResponseModel.Type> {}

/* A graphql query fragment builders for PostCreationResponseModel */
export { selectFromPostCreationResponse, postCreationResponseModelPrimitives, PostCreationResponseModelSelector } from "./PostCreationResponseModel.base"

/**
 * PostCreationResponseModel
 */
export const PostCreationResponseModel = PostCreationResponseModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    },
  }))
