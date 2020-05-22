import { createHttpClient } from "mst-gql"
import { useContext } from "react"
import { SERVER_URI } from "./config"
import { RootStore, RootStoreType } from "./models"
import { StoreContext } from "./models/reactUtils"
import { getAuthHeader } from "./utilities/jwtHelpers"

const defaultState = {
  currentUser: null,
  buttonClicked: false,
  weather: null,
  authentication: {
    token: undefined,
  },
}

export const rootStore = RootStore.create(defaultState, {
  gqlHttpClient: createHttpClient(SERVER_URI, {
    headers: {
      Authorization: getAuthHeader() || "",
    },
  }),
})

declare global {
  interface Window {
    STORE: RootStoreType
  }
}

if (process.env.NODE_ENV === "development") {
  window.STORE = rootStore
}

export const useStore = (): RootStoreType => useContext(StoreContext)
