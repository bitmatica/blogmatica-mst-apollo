import { observer } from "mobx-react-lite"
import React from "react"
import { postModelPrimitives, useQuery, userModelPrimitives } from "../models"
import LoadingContainer from "./common/LoadingContainer"
import Posts from "./Posts"

interface UserProfileProps {
  userId: string
}

const UserProfile: React.FunctionComponent<UserProfileProps> = ({ userId }) => {
  const { loading, data } = useQuery((store) =>
    store.queryUser(
      { id: userId },
      userModelPrimitives.posts(postModelPrimitives).toString(),
    ),
  )
  return (
    <LoadingContainer loading={loading}>
      <div>User profile</div>
      <div>Id: {userId}</div>
      <div>Email: {data?.user.email}</div>
      <br />
      <div>
        Posts: <Posts posts={data?.user.posts} />
      </div>
    </LoadingContainer>
  )
}

export default observer(UserProfile)
