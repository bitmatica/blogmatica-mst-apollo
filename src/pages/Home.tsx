import React from "react";
import { RouteProps } from "react-router-dom";
import UserProfile from "../components/UserProfile";
import Layout from "./Layout";
import CreatePostForm from "../components/CreatePostForm";
import { useWhoAmIQuery } from "../graphql";
import LoadingContainer from "../components/common/LoadingContainer";

const Home: React.FunctionComponent<RouteProps> = () => {
  const { loading, data } = useWhoAmIQuery()
  const id = data?.whoAmI?.id || ""
  return (
    <Layout>
      <LoadingContainer loading={loading}>
        <CreatePostForm authorId={id} />
        <UserProfile userId={id} />
      </LoadingContainer>
    </Layout>
  )
}

export default Home;
