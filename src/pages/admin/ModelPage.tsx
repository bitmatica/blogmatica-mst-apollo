import { observer } from "mobx-react-lite"
import React from "react"
import { Redirect, RouteComponentProps } from "react-router-dom"
import ModelListPage from "./ModelListPage"
import { getModelFromPlural } from "./utils"

export type ModelPageParams = {
  modelName: string
}

const ModelPage: React.FC<RouteComponentProps<ModelPageParams>> = ({ match }) => {
  const model = getModelFromPlural(match.params.modelName)
  if (!model) {
    return <Redirect to="/admin" />
  }
  return (
    <div>
      <ModelListPage model={model} />
    </div>
  )
}

export default observer(ModelPage)
