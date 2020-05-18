import { IModelType } from "mobx-state-tree"
import { ModelProperties } from "mobx-state-tree/dist/types/complex-types/model"
import { CommentModel, PostModel, UserModel } from "../../models"

export type RegisteredModelConfig<PropTypes extends ModelProperties> = {
  model: IModelType<PropTypes, any>
  fieldConfig?: {
    [U in keyof PropTypes]?: {
      displayName?: string
    }
  }
}

export type RegisteredModel<PropTypes extends ModelProperties> =
  | IModelType<PropTypes, any>
  | RegisteredModelConfig<PropTypes>

export const REGISTERED_MODELS: Array<RegisteredModel<any>> = [
  {
    model: PostModel,
  },
  CommentModel,
  UserModel,
]
