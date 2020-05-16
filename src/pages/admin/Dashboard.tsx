import { observer } from "mobx-react-lite"
import React from "react"
import { RouteProps } from "react-router-dom"
import Layout from "../../components/Layout"
import { CommentModel } from "../../models"

const Dashboard: React.FunctionComponent<RouteProps> = () => {
  return <Layout>hello</Layout>
}

console.log(CommentModel.properties)

export default observer(Dashboard)
