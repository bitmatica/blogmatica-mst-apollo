import { flow, getEnv, Instance } from "mobx-state-tree"
import { Query } from "mst-gql"
import Authentication from "src/models/Authentication"
import { RefreshTokenResponseModelType } from "src/models/RefreshTokenResponseModel"
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
import { userModelPrimitives, UserModelType } from "./UserModel"

export interface RootStoreType extends Instance<typeof RootStore> {}

const REFRESH_API_TOKEN_INTERVAL = 900000

export const RootStore = RootStoreBase.props({
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
    refreshTokenAndSetTimeOut() {
      const query = self.mutateRefreshToken()

      query.then((response) => {
        const {
          refreshToken: { token },
        } = response
        if (token) {
          self.authentication.setToken(token)
          setTimeout(() => {
            // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
            // @ts-ignore
            self.refreshTokenAndSetTimeOut()
          }, REFRESH_API_TOKEN_INTERVAL)
        }
        return response
      })

      return query
    },
  }))
  .actions((self) => ({
    initializeApp: flow(function* initializeApp() {
      try {
        const refreshTokenResponse = (yield self.mutateRefreshToken().currentPromise()) as {
          refreshToken: RefreshTokenResponseModelType
        }
        const token = refreshTokenResponse.refreshToken.token
        if (!token) {
          return
        }

        self.authentication.setToken(token.toString())
        setTimeout(() => {
          self.refreshTokenAndSetTimeOut()
        }, REFRESH_API_TOKEN_INTERVAL)

        const whoAmIResponse = (yield self.queryWhoAmI().currentPromise()) as {
          whoAmI: UserModelType | undefined
        }
        self.authentication.currentUser = whoAmIResponse.whoAmI || null
      } catch (error) {
        console.error(`Error initializing app: ${error}`)
        throw error
      }
    }),
  }))
  .actions((self) => ({
    login(input: UserLoginArgs): Query<{ login: UserLoginResponseModelType }> {
      const query = self.mutateLogin({ input })
      query.then(({ login: { token } }) => {
        if (token) {
          self.authentication.setToken(token)
        }
        setTimeout(() => {
          self.refreshTokenAndSetTimeOut()
        }, REFRESH_API_TOKEN_INTERVAL)
      })

      return query
    },
    logout(): Query<{ logout: MutationResponseModelType }> {
      const query = self.mutateLogout()
      query.then(() => {
        self.authentication.token = null
        self.authentication.currentUser = null
        getEnv(self).gqlHttpClient.setHeaders({ authorization: "" })
      })
      return query
    },
  }))
  .actions((self) => ({
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
