import { useContext } from "react";
import { Instance } from "mobx-state-tree";
import CurrentUser from "./CurrentUser";
import { RootStore, StoreContext } from "../models";
import { createHttpClient } from "mst-gql";
import Weather from "../models/Weather";


export type RootStoreModel = Instance<typeof RootStore>;

export default function createStore(): RootStoreModel {
  return RootStore.create(undefined, {
    gqlHttpClient: createHttpClient("http://localhost:4000/graphql"),
    currentUser: CurrentUser.create({}),
    buttonClicked: false,
    weather: Weather.create({
      temperature: 73,
      humidity: 45,
      description: "",
      status: "pending",
    }),
  });
}

export const StoreProvider = StoreContext.Provider

export const useStore = (): RootStoreModel => useContext(StoreContext)
