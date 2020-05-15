import { Instance } from "mobx-state-tree"
import { UserCreationResponseModelBase } from "./UserCreationResponseModel.base"

/* The TypeScript type of an instance of UserCreationResponseModel */
export interface UserCreationResponseModelType
  extends Instance<typeof UserCreationResponseModel.Type> {}

/* A graphql query fragment builders for UserCreationResponseModel */
export {
  selectFromUserCreationResponse,
  userCreationResponseModelPrimitives,
  UserCreationResponseModelSelector,
} from "./UserCreationResponseModel.base"

/**
 * UserCreationResponseModel
 */
export const UserCreationResponseModel = UserCreationResponseModelBase.actions((self) => ({
  // This is an auto-generated example action.
  log() {
    console.log(JSON.stringify(self))
  },
}))
