import { flow, getEnv, Instance, types } from "mobx-state-tree"
import { Query } from "mst-gql"
import { getAuthHeader, resetJwt, setJwt } from "../utilities/jwtHelpers"
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
import Weather, { fetchWeatherData, OpenWeatherResponse } from "./Weather"

export interface RootStoreType extends Instance<typeof RootStore.Type> {}

export const RootStore = RootStoreBase.props({
  buttonClicked: types.boolean,
  weather: types.maybeNull(Weather),
  currentUser: types.maybeNull(types.reference(UserModel)),
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
    setLogin(token: string): void {
      setJwt(token)
      getEnv(self).gqlHttpClient.setHeaders({ Authorization: getAuthHeader() })
    },
  }))
  .actions((self) => ({
    login(input: UserLoginArgs): Query<{ login: UserLoginResponseModelType }> {
      const query = self.mutateLogin({ input })
      query.then((data) => {
        const { token, success } = data.login
        if (token && success) {
          self.setLogin(token)
        }
        return self.getCurrentUser()
      })
      return query
    },
  }))
  .actions((self) => ({
    logout(): Query<{ logout: MutationResponseModelType }> {
      const query = self.mutateLogout()
      query.then(() => {
        self.currentUser = null
        resetJwt()
        getEnv(self).gqlHttpClient.setHeaders({ authorization: "" })
      })
      return query
    },
    updateButtonClicked(): boolean {
      return (self.buttonClicked = !self.buttonClicked)
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
    getTheWeather: flow(function* fetchWeather() {
      try {
        const weatherData: OpenWeatherResponse = yield fetchWeatherData()
        self.weather = Weather.create({
          temperature: weatherData.main.temp,
          humidity: weatherData.main.humidity,
          description: weatherData.weather.map((w) => w.description).join(" "),
          status: "loaded",
        })
      } catch (error) {
        console.log(error)
      }
    }),
  }))
  // to use a method already declared in actions, chain a new actions call
  .actions((self) => ({
    login(input: UserLoginArgs): Query<{ login: UserLoginResponseModelType }> {
      const query = self.mutateLogin({ input })
      query.then((data) => {
        const { token, success } = data.login
        if (token && success) {
          self.setLogin(token)
        }
        return self.getCurrentUser()
      })
      return query
    },
    logout(): Query<{ logout: MutationResponseModelType }> {
      const query = self.mutateLogout()
      query.then(() => {
        self.currentUser = null
        resetJwt()
        getEnv(self).gqlHttpClient.setHeaders({ authorization: "" })
      })
      return query
    },
    updateButtonClicked(): boolean {
      return (self.buttonClicked = !self.buttonClicked)
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
    getTheWeather: flow(function* fetchWeather() {
      try {
        const weatherData: OpenWeatherResponse = yield fetchWeatherData()
        self.weather = Weather.create({
          temperature: weatherData.main.temp,
          humidity: weatherData.main.humidity,
          description: weatherData.weather.map((w) => w.description).join(" "),
          status: "loaded",
        })
      } catch (error) {
        console.log(error)
      }
    }),
  }))
  .views((self) => ({
    isLoggedIn(): boolean {
      return Boolean(self.currentUser)
    },
    isButtonClicked(): string {
      return self.buttonClicked ? "yes" : "no"
    },
  }))
