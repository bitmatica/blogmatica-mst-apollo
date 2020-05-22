import { types } from "mobx-state-tree"
import jwtDecode from "jwt-decode"

interface DecodedJwt {
  exp: number
}

const ApiToken = types
  .model("ApiToken", {
    token: types.string,
  })
  .views((self) => ({
    isValid() {
      if (!self.token) return false
      const decoded = jwtDecode(self.token) as DecodedJwt
      return decoded && new Date(decoded?.exp - 15) > new Date()
    },
  }))

export default ApiToken
