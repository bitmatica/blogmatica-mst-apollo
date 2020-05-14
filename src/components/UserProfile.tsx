import React from "react"
import LoadingContainer from "./common/LoadingContainer"
import Posts from "./Posts"
import { useQuery, userModelPrimitives, postModelPrimitives } from "../models"
import { observer } from "mobx-react-lite";

interface UserProfileProps {
  userId: string;
}

const UserProfile: React.FunctionComponent<UserProfileProps> = ({ userId }) => {
  const { loading, data } = useQuery(store => store.queryUser(
    { id: userId },
    userModelPrimitives.posts(postModelPrimitives).toString(),
  ))

  return (
    <LoadingContainer loading={loading}>
      <div>User profile</div>
      <div>Id: {userId}</div>
      <div>Email: {data?.user.email}</div>
      <div>
        Posts: <Posts posts={data?.user.posts || []} />
      </div>
    </LoadingContainer>
  );
};

export default observer(UserProfile);
