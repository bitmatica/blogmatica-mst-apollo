import { observer } from "mobx-react-lite"
import React from "react"
import { Posts } from "src/components"
import { useQuery } from "src/models/reactUtils"
import { LoadingContainer } from "../"
import { selectFromUserWithPosts } from "../../models/UserModel"

interface UserProfileProps {
  userId: string
}

const UserProfile: React.FC<UserProfileProps> = ({ userId }) => {
  const { loading, data } = useQuery((store) =>
    store.queryUser({ id: userId }, selectFromUserWithPosts()),
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
