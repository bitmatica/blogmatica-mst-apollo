import { Instance } from "mobx-state-tree"
import { RefreshTokenResponseModelBase } from "./RefreshTokenResponseModel.base"

/* The TypeScript type of an instance of RefreshTokenResponseModel */
export interface RefreshTokenResponseModelType
  extends Instance<typeof RefreshTokenResponseModel.Type> {}

/* A graphql query fragment builders for RefreshTokenResponseModel */
export {
  selectFromRefreshTokenResponse,
  refreshTokenResponseModelPrimitives,
  RefreshTokenResponseModelSelector,
} from "./RefreshTokenResponseModel.base"

/**
 * RefreshTokenResponseModel
 */
export const RefreshTokenResponseModel = RefreshTokenResponseModelBase.actions((self) => ({
  // This is an auto-generated example action.
  log() {
    console.log(JSON.stringify(self))
  },
}))
