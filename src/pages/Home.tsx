import { observer } from "mobx-react-lite"
import React from "react"
import { RouteProps } from "react-router-dom"
import { CreatePostForm, Layout, LoadingContainer, UserProfile } from "../components"
import { useQuery } from "../models/reactUtils"
import { selectFromUser } from "../models"

const Home: React.FC<RouteProps> = () => {
  const { loading, data } = useQuery(
    store => store.queryWhoAmI({}, selectFromUser().id.toString())
  )
  const id = data?.whoAmI.id || ""
  return (
    <Layout>
      <LoadingContainer loading={loading}>
        <CreatePostForm authorId={id} />
        <UserProfile userId={id} />
      </LoadingContainer>
    </Layout>
  )
}

export default observer(Home)
