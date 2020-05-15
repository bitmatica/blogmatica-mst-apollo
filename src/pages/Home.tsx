import React from "react"
import { RouteProps } from "react-router-dom"
import UserProfile from "../components/UserProfile"
import Layout from "../components/Layout"
import CreatePostForm from "../components/CreatePostForm"
import LoadingContainer from "../components/common/LoadingContainer"
import { useStore } from "../getMstGql"
import { observer } from "mobx-react-lite"

const Home: React.FunctionComponent<RouteProps> = () => {
  const { currentUser } = useStore()
  const id = currentUser?.id || ""
  return (
    <Layout>
      <LoadingContainer loading={!currentUser}>
        <CreatePostForm authorId={id} />
        <UserProfile userId={id} />
      </LoadingContainer>
    </Layout>
  )
}

export default observer(Home);
