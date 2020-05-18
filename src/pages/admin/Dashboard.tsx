import { Text } from "@chakra-ui/core"
import { observer } from "mobx-react-lite"
import React from "react"
import { Route, RouteProps, Switch } from "react-router-dom"
import AdminLayout from "./components/Layout"
import ModelPage from "./ModelPage"

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

export default observer(Dashboard)
