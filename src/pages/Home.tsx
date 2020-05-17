import { observer } from "mobx-react-lite"
import React from "react"
import { RouteProps } from "react-router-dom"
import LoadingContainer from "../components/common/LoadingContainer"
import CreatePostForm from "../components/CreatePostForm"
import Layout from "../components/Layout"
import UserProfile from "../components/UserProfile"
import { useStore } from "../getMstGql"

const Home: React.FC<RouteProps> = () => {
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

export default observer(Home)
