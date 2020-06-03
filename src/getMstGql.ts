import { createHttpClient } from "mst-gql"
import { useContext } from "react"
import { SERVER_URI } from "./config"
import { RootStore, RootStoreType } from "./models"
import { StoreContext } from "./models/reactUtils"


const defaultState = {
  currentUser: null,
  buttonClicked: false,
  authentication: {
    token: undefined,
  },
}

const gqlHttpClient = createHttpClient(SERVER_URI, {
  credentials: "include",
})

export const rootStore = RootStore.create(defaultState, {
  gqlHttpClient,
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
