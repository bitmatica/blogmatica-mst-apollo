import { createContext, useContext } from "react"
import { Instance, types } from "mobx-state-tree"
import CurrentUser from "./CurrentUser"

const RootStore = types.model("RootStore", {
  currentUser: CurrentUser,
})

export type RootStoreModel = Instance<typeof RootStore>

export default function createStore(): RootStoreModel {
  return RootStore.create({
    currentUser: CurrentUser.create({}),
  })
}

const store = createStore()
const StoreContext = createContext<RootStoreModel>(store)
export const useStore = (): RootStoreModel => useContext(StoreContext)
export const StoreProvider = StoreContext.Provider
