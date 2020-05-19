import { observer } from "mobx-react-lite"
import React from "react"
import { Posts } from "src/components"
import { postModelPrimitives, userModelPrimitives } from "src/models"
import { useQuery } from "src/models/reactUtils"
import { LoadingContainer } from "../"

interface UserProfileProps {
  userId: string
}

const UserProfile: React.FC<UserProfileProps> = ({ userId }) => {
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
