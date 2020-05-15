import React from "react";
import Post from "./Post";
import { PostModelType } from "../models";

interface PostsProps {
  posts?: Partial<PostModelType>[];
}

const Posts: React.FunctionComponent<PostsProps> = ({ posts }) =>
  posts?.length ? (
    <div>
      {posts.map(
        (p: Partial<PostModelType>): React.ReactElement => (
          <Post key={p.id} post={p} />
        ),
      )}
    </div>
  ) : (
    <div>No posts!</div>
  )

export default Posts
