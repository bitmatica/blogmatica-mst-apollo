import React from "react";
import { PostModelType } from "../models";
import { Text, Box } from "@chakra-ui/core";

interface PostProps {
  post: Partial<PostModelType>;
}

const Post: React.FunctionComponent<PostProps> = ({ post: { id, title, body} }) => (
  <Box>
    <Text>Id: {id}</Text>
    <Text>Title: {title}</Text>
    <Text>Body: {body}</Text>
  </Box>
);

export default Post;
