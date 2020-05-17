import React from "react"
import { RouteComponentProps } from "react-router-dom"
import Layout from "../components/Layout"
import UserProfile from "../components/UserProfile"

interface MatchParams {
  userId: string
}

const User: React.FC<RouteComponentProps<MatchParams>> = ({ match }) => {
  return (
    <Layout>
      <UserProfile userId={match.params.userId} />
    </Layout>
  )
}

export default User
