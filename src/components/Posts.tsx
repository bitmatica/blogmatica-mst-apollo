import React from "react"
import { Post as IPost } from "../graphql"
import Post from "./Post"

interface PostsProps {
  posts?: Partial<IPost>[]
}

const Posts: React.FunctionComponent<PostsProps> = ({ posts }) =>
  posts?.length ? (
    <div>
      {posts.map(
        (p: Partial<IPost>): React.ReactElement => (
          <Post key={p.id} post={p} />
        ),
      )}
    </div>
  ) : (
    <div>No posts!</div>
  )

export default Posts
