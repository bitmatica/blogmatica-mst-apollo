import { Text } from "@chakra-ui/core"
import { observer } from "mobx-react-lite"
import React from "react"
import { Route, RouteComponentProps, RouteProps, Switch } from "react-router-dom"
import * as models from "../../models"
import { CommentModel } from "../../models"
import AdminLayout from "./components/Layout"

type ModelPageParams = {
  modelName: string
}

console.log(models.RootStore)
console.log(models.PostModel)

const ModelPage: React.FC<RouteComponentProps<ModelPageParams>> = ({ match }) => {
  return <div>Model Page {match.params.modelName}</div>
}

const AdminHome: React.FC = () => <Text>Admin Dashboard</Text>

const Dashboard: React.FC<RouteProps> = () => {
  return (
    <AdminLayout>
      <Switch>
        <Route path="/admin/models/:modelName" component={ModelPage} />
        <Route path="*" component={AdminHome} />
      </Switch>
    </AdminLayout>
  )
}

console.log(CommentModel.properties)

export default observer(Dashboard)
