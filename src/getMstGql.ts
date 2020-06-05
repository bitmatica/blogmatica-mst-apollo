import { createHttpClient } from "mst-gql"
import { useContext, useState } from "react"
import { SERVER_URI } from "./config"
import { RootStore, RootStoreType } from "./models"
import { StoreContext } from "./models/reactUtils"

const defaultState = {
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

export type UsePromiseResponse<T> = {
  loading: boolean
  data: T | undefined
  error: Error | undefined
}

export const usePromise = <T>(promise: PromiseLike<T>): UsePromiseResponse<T> => {
  const [loading, setLoading] = useState(true)
  const [data, setData] = useState<T | undefined>(undefined)
  const [error, setError] = useState<Error | undefined>(undefined)

  promise.then(
    (data) => {
      setData(data)
      setLoading(false)
    },
    (err: Error) => {
      setError(err)
      setLoading(false)
    },
  )

  return { loading, data, error }
}
