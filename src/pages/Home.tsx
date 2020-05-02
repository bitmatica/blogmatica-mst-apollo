import React from "react";
import { observer } from "mobx-react-lite";
import { RouteProps } from "react-router-dom";
import UserProfile from "../components/UserProfile";
import { useStore } from "../store/RootStore";
import Layout from "./Layout";
import CreatePostForm from "../components/CreatePostForm";

const Home: React.FunctionComponent<RouteProps> = () => {
  const {
    currentUser: { id },
  } = useStore();
  return (
    <Layout>
      <CreatePostForm authorId={id} />
      <UserProfile userId={id} />
    </Layout>
  );
};

export default observer(Home);
