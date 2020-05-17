import { observer } from "mobx-react-lite"
import React from "react"
import { RouteProps } from "react-router-dom"
import { CommentModel } from "../../models"
import AdminLayout from "./components/Layout"

const Dashboard: React.FunctionComponent<RouteProps> = () => {
  return <AdminLayout>Admin Dashboard </AdminLayout>
}

console.log(CommentModel.properties)

export default observer(Dashboard)
