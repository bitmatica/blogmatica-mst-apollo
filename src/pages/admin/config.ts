import { IModelType } from "mobx-state-tree"
import { ModelProperties } from "mobx-state-tree/dist/types/complex-types/model"
import { CommentModel, PostModel, UserModel, UserModelType } from "../../models"

export type RegisteredModelFieldConfig<T extends IModelType<any, any>> = {
  label?: string
  format?: (record: T["Type"]) => string | JSX.Element
  disabled?: boolean
}

export type RegisteredModelFieldConfigMap<T extends IModelType<any, any>> = {
  [U in keyof T["Type"]]?: RegisteredModelFieldConfig<T>
}

export type RegisteredModelConfig<T extends IModelType<any, any>> = {
  model: T
  fieldConfig?: RegisteredModelFieldConfigMap<T>
}

export type RegisteredModel<PropTypes extends ModelProperties> =
  | IModelType<PropTypes, any>
  | RegisteredModelConfig<IModelType<PropTypes, any>>

export const REGISTERED_MODELS: Array<RegisteredModel<any>> = [
  PostModel,
  CommentModel,
  {
    model: UserModel,
    fieldConfig: {
      profileImageUrl: { disabled: true },
      gustoAccess: { disabled: true },
      roles: {
        format: (record: UserModelType): string => (record?.roles || []).join(", "),
      },
    },
  },
]
