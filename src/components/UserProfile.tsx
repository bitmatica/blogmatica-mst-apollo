import React from "react";
import { useUserWithPostsQuery } from "../graphql";
import LoadingContainer from "./common/LoadingContainer";
import Posts from "./Posts";

interface UserProfileProps {
  userId: string;
}

const UserProfile: React.FunctionComponent<UserProfileProps> = ({ userId }) => {
  const { loading, data } = useUserWithPostsQuery({ variables: { userId } });

  return (
    <LoadingContainer loading={loading}>
      <div>User profile</div>
      <div>Id: {userId}</div>
      <div>Email: {data?.user?.email}</div>
      <div>
        Posts: <Posts posts={data?.user?.posts || []} />
      </div>
    </LoadingContainer>
  );
};

export default UserProfile;
