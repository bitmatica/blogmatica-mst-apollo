import { flow, getEnv, Instance, types } from "mobx-state-tree"
import { Query } from "mst-gql"
import Authentication from "src/models/Authentication"
import { getAuthHeader } from "../utilities/jwtHelpers"
import { MutationResponseModelType } from "./MutationResponseModel"
import { PostCreationResponseModelType } from "./PostCreationResponseModel"
import { postCreationResponseModelPrimitives } from "./PostCreationResponseModel.base"
import { postModelPrimitives } from "./PostModel.base"
import {
  CreatePostInput,
  CreateUserInput,
  RootStoreBase,
  UserLoginArgs,
} from "./RootStore.base"
import { UserCreationResponseModelType } from "./UserCreationResponseModel"
import { UserLoginResponseModelType } from "./UserLoginResponseModel"
import { UserModel, userModelPrimitives, UserModelType } from "./UserModel"
import { UserModelSelector } from "./UserModel.base"

export interface RootStoreType extends Instance<typeof RootStore> {}

export const RootStore = RootStoreBase.props({
  currentUser: types.maybeNull(types.reference(UserModel)),
  authentication: Authentication,
})
  .actions((self) => ({
    createPost(
      input: CreatePostInput,
    ): Query<{
      createPost: PostCreationResponseModelType
    }> {
      return self.mutateCreatePost(
        { input },
        postCreationResponseModelPrimitives
          .post(postModelPrimitives.author(userModelPrimitives))
          .toString(),
      )
    },
    getCurrentUser(
      selector?: string | ((qb: UserModelSelector) => UserModelSelector) | undefined,
    ): Query<{ whoAmI: UserModelType }> {
      const query = self.queryWhoAmI({}, selector, { fetchPolicy: "no-cache" })
      query.then(({ whoAmI }) => {
        self.currentUser = whoAmI
      })
      return query
    },
  }))
  .actions((self) => ({
    // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
    // @ts-ignore
    // https://github.com/mobxjs/mst-gql/issues/227
    maybeRefreshAuthToken: flow(function* () {
      if (!self.authentication.isValid()) {
        yield self.mutateRefreshToken()
          .then((response) => {
            const {refreshToken: { token, success, message }} = response
            if (token && success) {
              self.authentication.token = token || null
              getEnv(self).gqlHttpClient.setHeaders({
                Authorization: getAuthHeader(token),
              })
            } else {
              throw new Error(message)
            }
          })
      }
    }),
  }))
  .actions((self) => ({
    login(input: UserLoginArgs): Query<{ login: UserLoginResponseModelType }> {
      const query = self.mutateLogin({ input })
      query.then(async () => {
        await self.maybeRefreshAuthToken()
        // TODO: error handling
      })

      return query
    },
  }))
  .actions((self) => ({
    logout(): Query<{ logout: MutationResponseModelType }> {
      const query = self.mutateLogout()
      query.then(() => {
        self.currentUser = null
        self.authentication.token = null
        getEnv(self).gqlHttpClient.setHeaders({ authorization: "" })
      })
      return query
    },
    createUserAndLogin(
      input: CreateUserInput,
    ): Query<{ createUser: UserCreationResponseModelType }> {
      const query = self.mutateCreateUser({ input })
      query.then(() => {
        self.login(input)
      })
      return query
    },
  }))
  .views((self) => ({
    isLoggedIn(): boolean {
      return Boolean(self.currentUser)
    },
  }))
