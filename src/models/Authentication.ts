import jwtDecode from "jwt-decode"
import { getEnv, Instance, types } from "mobx-state-tree"
import { UserModel, UserModelType } from "src/models/UserModel"
import { getAuthHeader } from "../utilities/jwtHelpers"

interface DecodedJwt {
  exp: number
}

const Authentication = types
  .model("Authentication", {
    token: types.maybeNull(types.string),
    currentUser: types.maybeNull(types.reference(UserModel)),
  })
  .views((self) => ({
    isLoggedIn() {
      if (!self.token) return false
      const decoded = jwtDecode(self.token) as DecodedJwt
      const expiration = new Date(decoded?.exp * 1000 - 15)
      const now = new Date()
      return decoded && expiration > now
    },
  }))
  .actions((self) => ({
    setToken(token: string) {
      self.token = token
      getEnv(self).gqlHttpClient.setHeaders({
        Authorization: getAuthHeader(token),
      })
    },
    setCurrentUser(user: Instance<UserModelType>) {
      self.currentUser = user
    },
  }))

export default Authentication
