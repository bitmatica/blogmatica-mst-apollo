import { IModelType, Instance } from "mobx-state-tree"
import { ModelProperties } from "mobx-state-tree/dist/types/complex-types/model"
import { CommentModel, PostModel, UserModel } from "../../models"

export type RegisteredModelConfig<T extends IModelType<any, any>> = {
  model: T
  fieldConfig?: {
    [U in keyof Instance<T>]?:
      | {
          displayName?: string
        }
      | boolean
  }
}

export type RegisteredModel<PropTypes extends ModelProperties> =
  | IModelType<PropTypes, any>
  | RegisteredModelConfig<IModelType<PropTypes, any>>

export const REGISTERED_MODELS: Array<RegisteredModel<any>> = [
  {
    model: PostModel,
  },
  CommentModel,
  {
    model: UserModel,
    fieldConfig: {
      profileImageUrl: false,
      gustoAccess: false,
    },
  },
]
