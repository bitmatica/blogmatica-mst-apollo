import jwtDecode from "jwt-decode"
import { types } from "mobx-state-tree"

interface DecodedJwt {
  exp: number
}

const Authentication = types
  .model("Authentication", {
    token: types.maybeNull(types.string),
  })
  .views((self) => ({
    isValid() {
      if (!self.token) return false
      const decoded = jwtDecode(self.token) as DecodedJwt
      return decoded && new Date(decoded?.exp - 15) > new Date()
    },
  }))

export default Authentication
