import React from "react"
import { Box, Text } from "@chakra-ui/core"
import { observer } from "mobx-react-lite"
import { userModelPrimitives, postModelPrimitives } from "../models"
import { useQuery } from "../models/reactUtils"
import LoadingContainer from "./common/LoadingContainer"

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
      <Text>User profile</Text>
      <Text>Id: {userId}</Text>
      <Text>Email: {data?.user.email}</Text>
      <Box></Box>
    </LoadingContainer>
  )
}

export default observer(UserProfile)
