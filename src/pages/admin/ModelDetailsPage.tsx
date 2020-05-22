import { observer } from "mobx-react-lite"
import React from "react"
import { Redirect, RouteComponentProps } from "react-router-dom"
import ModelDetails from "src/pages/admin/ModelDetails"
import { getModelFromPlural } from "./utils"

export type ModelDetailsPageParams = {
  modelName: string
  modelId: string
}

const ModelDetailsPage: React.FC<RouteComponentProps<ModelDetailsPageParams>> = ({
  match,
}) => {
  const { modelName, modelId } = match.params
  const modelConfig = getModelFromPlural(modelName)

  if (!modelConfig) {
    return <Redirect to="/admin" />
  }

  return (
    <div>
      <ModelDetails modelConfig={modelConfig} modelId={modelId} />
    </div>
  )
}

export default observer(ModelDetailsPage)
