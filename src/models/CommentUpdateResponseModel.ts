import { Instance } from "mobx-state-tree"
import { CommentUpdateResponseModelBase } from "./CommentUpdateResponseModel.base"

/* The TypeScript type of an instance of CommentUpdateResponseModel */
export interface CommentUpdateResponseModelType extends Instance<typeof CommentUpdateResponseModel.Type> {}

/* A graphql query fragment builders for CommentUpdateResponseModel */
export { selectFromCommentUpdateResponse, commentUpdateResponseModelPrimitives, CommentUpdateResponseModelSelector } from "./CommentUpdateResponseModel.base"

/**
 * CommentUpdateResponseModel
 */
export const CommentUpdateResponseModel = CommentUpdateResponseModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    },
  }))
