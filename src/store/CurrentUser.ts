import { Instance, ModelActions, types } from "mobx-state-tree"

const CURRENT_USER_MODEL_NAME = "CurrentUser"

const CurrentUser = types
  .model(CURRENT_USER_MODEL_NAME, {
    id: "",
    email: "",
  })
  .actions(
    (self): ModelActions => ({
      updateUser({ id, email }: { id?: string; email?: string }): void {
        self.id = id || self.id
        self.email = email || self.email
      },
      reset(): void {
        self.id = ""
        self.email = ""
      },
    }),
  )
  .views(
    (self): ModelActions => ({
      isLoggedIn(): boolean {
        return Boolean(self.id)
      },
    }),
  )

export type CurrentUserModel = Instance<typeof CurrentUser>

export default CurrentUser
