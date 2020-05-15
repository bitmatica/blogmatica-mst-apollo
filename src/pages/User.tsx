import React from "react"
import { RouteComponentProps } from "react-router-dom"
import UserProfile from "../components/UserProfile"
import Layout from "../components/Layout"

interface MatchParams {
  userId: string
}

const User: React.FunctionComponent<RouteComponentProps<MatchParams>> = ({ match }) => {
  return (
    <Layout>
      <UserProfile userId={match.params.userId} />
    </Layout>
  )
};

export default User
