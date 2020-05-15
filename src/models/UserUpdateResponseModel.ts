import { Instance } from "mobx-state-tree"
import { UserUpdateResponseModelBase } from "./UserUpdateResponseModel.base"

/* The TypeScript type of an instance of UserUpdateResponseModel */
export interface UserUpdateResponseModelType extends Instance<typeof UserUpdateResponseModel.Type> {}

/* A graphql query fragment builders for UserUpdateResponseModel */
export { selectFromUserUpdateResponse, userUpdateResponseModelPrimitives, UserUpdateResponseModelSelector } from "./UserUpdateResponseModel.base"

/**
 * UserUpdateResponseModel
 */
export const UserUpdateResponseModel = UserUpdateResponseModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    },
  }))
