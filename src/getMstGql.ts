import { createHttpClient } from "mst-gql"
import { Variables } from "graphql-request/dist/src/types"
import { useContext } from "react"
import { SERVER_URI } from "./config"
import { RootStore, RootStoreType } from "./models"
import { StoreContext } from "./models/reactUtils"
import { getAuthHeader } from "./utilities/jwtHelpers"


const defaultState = {
  currentUser: null,
  buttonClicked: false,
  authentication: {
    token: undefined,
  },
}

const gqlHttpClient = createHttpClient(SERVER_URI, {
  headers: {
    Authorization: getAuthHeader() || "",
  },
})

const unauthedRequest = gqlHttpClient.request.bind(gqlHttpClient)

export const rootStore = RootStore.create(defaultState, {
  gqlHttpClient,
})

gqlHttpClient.request = async <T extends any>(
  query: string,
  variables: Variables
): Promise<T> => {
  if (!rootStore.authentication.isValid()) {
    const refreshTokenResponse = await unauthedRequest(`
      mutation refreshToken {
        refreshToken {
          token
          message
        }
      }`
    )
    const { token } = refreshTokenResponse.refreshToken
    rootStore.authentication.token = token
    gqlHttpClient.setHeaders({
      Authorization: getAuthHeader(token),
    })
    // TODO: what should happen if this fails?
    // I'm thinking we should make the request anyway, because the request might not require a token
  }

  return unauthedRequest(query, variables)
}

declare global {
  interface Window {
    STORE: RootStoreType
  }
}

if (process.env.NODE_ENV === "development") {
  window.STORE = rootStore
}

export const useStore = (): RootStoreType => useContext(StoreContext)
