import { Instance } from "mobx-state-tree"
import { PostUpdateResponseModelBase } from "./PostUpdateResponseModel.base"

/* The TypeScript type of an instance of PostUpdateResponseModel */
export interface PostUpdateResponseModelType
  extends Instance<typeof PostUpdateResponseModel.Type> {}

/* A graphql query fragment builders for PostUpdateResponseModel */
export {
  selectFromPostUpdateResponse,
  postUpdateResponseModelPrimitives,
  PostUpdateResponseModelSelector,
} from "./PostUpdateResponseModel.base"

/**
 * PostUpdateResponseModel
 */
export const PostUpdateResponseModel = PostUpdateResponseModelBase.actions((self) => ({
  // This is an auto-generated example action.
  log() {
    console.log(JSON.stringify(self))
  },
}))
