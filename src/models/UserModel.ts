import { Instance } from "mobx-state-tree"
import { UserModelBase, selectFromUser } from "./UserModel.base"
import { postModelPrimitives } from "./PostModel"

/* The TypeScript type of an instance of UserModel */
export interface UserModelType extends Instance<typeof UserModel.Type> {}

/* A graphql query fragment builders for UserModel */
export { selectFromUser, userModelPrimitives, UserModelSelector } from "./UserModel.base"

export const selectIdFromUser = selectFromUser().id.toString()

// if this is not a function, postModelPrimitives will not be initialized
export const selectFromUserWithPosts = () =>
  selectFromUser()
    .createdAt.updatedAt.email.roles.gustoAccess.profileImageUrl.posts(postModelPrimitives)
    .toString()

/**
 * UserModel
 */
export const UserModel = UserModelBase.actions(() => ({}))
