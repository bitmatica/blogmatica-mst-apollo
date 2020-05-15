import { Instance } from "mobx-state-tree"
import { CommentCreationResponseModelBase } from "./CommentCreationResponseModel.base"

/* The TypeScript type of an instance of CommentCreationResponseModel */
export interface CommentCreationResponseModelType
  extends Instance<typeof CommentCreationResponseModel.Type> {}

/* A graphql query fragment builders for CommentCreationResponseModel */
export {
  selectFromCommentCreationResponse,
  commentCreationResponseModelPrimitives,
  CommentCreationResponseModelSelector,
} from "./CommentCreationResponseModel.base"

/**
 * CommentCreationResponseModel
 */
export const CommentCreationResponseModel = CommentCreationResponseModelBase.actions(
  (self) => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    },
  }),
)
