import { observer } from "mobx-react-lite"
import React from "react"
import { Redirect, RouteComponentProps } from "react-router-dom"
import ModelListPage from "./ModelListPage"
import { getModelFromPlural } from "./utils"

export type ModelPageParams = {
  modelName: string
}

const ModelPage: React.FunctionComponent<RouteComponentProps<ModelPageParams>> = ({
  match,
}) => {
  const modelConfig = getModelFromPlural(match.params.modelName)
  if (!modelConfig) {
    return <Redirect to="/admin" />
  }
  return (
    <div>
      <ModelListPage modelConfig={modelConfig} />
    </div>
  )
}

export default observer(ModelPage)
