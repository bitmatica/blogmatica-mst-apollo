import { Instance } from "mobx-state-tree"
import { UserLoginResponseModelBase } from "./UserLoginResponseModel.base"

/* The TypeScript type of an instance of UserLoginResponseModel */
export interface UserLoginResponseModelType extends Instance<typeof UserLoginResponseModel.Type> {}

/* A graphql query fragment builders for UserLoginResponseModel */
export { selectFromUserLoginResponse, userLoginResponseModelPrimitives, UserLoginResponseModelSelector } from "./UserLoginResponseModel.base"

/**
 * UserLoginResponseModel
 */
export const UserLoginResponseModel = UserLoginResponseModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    },
  }))
