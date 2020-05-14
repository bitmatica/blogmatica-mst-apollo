import { types } from "mobx-state-tree"
import { RootStoreBase } from "./RootStore.base"
import Weather from "./Weather"


export const RootStore = RootStoreBase
  .props(({
    buttonClicked: types.boolean,
    weather: Weather,
  }))
  .actions(self => ({
    updateButtonClicked(): boolean {
      return self.buttonClicked = !self.buttonClicked
    },
  }))
  .views((self) => ({
    isButtonClicked: (): string => (
      self.buttonClicked ? "yes" : "no"
    ),
  }))
