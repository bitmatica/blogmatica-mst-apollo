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
export const RefreshTokenResponseModel = RefreshTokenResponseModelBase
