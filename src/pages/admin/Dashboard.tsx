import { Box, Text } from "@chakra-ui/core"
import { observer } from "mobx-react-lite"
import React from "react"
import { Route, RouteProps, Switch } from "react-router-dom"
import ModelDetailsPage from "src/pages/admin/ModelDetailsPage"
import AdminLayout from "./components/Layout"
import ModelListPage from "./ModelListPage"

const AdminHome: React.FC = () => (
  <Box p={[2, 4, 8]}>
    <Text fontSize="3xl" fontFamily="heading">
      Admin Dashboard
    </Text>
  </Box>
)

const Dashboard: React.FC<RouteProps> = () => {
  return (
    <AdminLayout>
      <Switch>
        <Route path="/admin/models/:modelName/:modelId" component={ModelDetailsPage} />
        <Route path="/admin/models/:modelName" component={ModelListPage} />
        <Route path="*" component={AdminHome} />
      </Switch>
    </AdminLayout>
  )
}

export default observer(Dashboard)
