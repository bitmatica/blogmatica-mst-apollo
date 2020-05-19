import { Box, Text } from "@chakra-ui/core"
import React from "react"
import { PostModelType } from "src/models"

interface PostProps {
  post: Partial<PostModelType>
}

const Post: React.FC<PostProps> = ({ post: { id, title, body } }) => (
  <Box>
    <Text>Id: {id}</Text>
    <Text>Title: {title}</Text>
    <Text>Body: {body}</Text>
  </Box>
)

export default Post
