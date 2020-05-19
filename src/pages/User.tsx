import React from "react"
import { RouteComponentProps } from "react-router-dom"
import { Layout, UserProfile } from "src/components"

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
