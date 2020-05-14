import { useContext } from "react";
import { createHttpClient } from "mst-gql";
import { RootStore, StoreContext, RootStoreType } from "./models";
import { getAuthHeader } from "./utilities/jwtHelpers";

const defaultState = {
  currentUser: null,
  buttonClicked: false,
  weather: null,
}

export const rootStore = RootStore.create(defaultState, {
  gqlHttpClient: createHttpClient("http://localhost:3001/graphql", {
    headers: {
      Authorization: getAuthHeader() || "",
    },
  }),
})

export const useStore = (): RootStoreType => useContext(StoreContext)
