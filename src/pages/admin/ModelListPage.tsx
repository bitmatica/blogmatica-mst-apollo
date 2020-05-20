import { observer } from "mobx-react-lite"
import React from "react"
import { Redirect, RouteComponentProps } from "react-router-dom"
import ModelList from "src/pages/admin/ModelList"
import { getModelFromPlural } from "./utils"

export type ModelListPageParams = {
  modelName: string
}

const ModelListPage: React.FC<RouteComponentProps<ModelListPageParams>> = ({ match }) => {
  const modelConfig = getModelFromPlural(match.params.modelName)

  if (!modelConfig) {
    return <Redirect to="/admin" />
  }

  return (
    <div>
      <ModelList modelConfig={modelConfig} />
    </div>
  )
}

export default observer(ModelListPage)
