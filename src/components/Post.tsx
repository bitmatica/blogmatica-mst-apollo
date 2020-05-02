import React from "react";
import { Post as IPost } from "../graphql";

interface PostProps {
  post: Partial<IPost>;
}

const Post: React.FunctionComponent<PostProps> = ({ post }) => (
  <div>
    <div>{post.id}</div>
    <div>{post.title}</div>
    <div>{post.body}</div>
  </div>
);

export default Post;
