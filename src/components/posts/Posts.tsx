import { observer } from "mobx-react-lite"
import React from "react"
import { PostModelType } from "src/models"
import { Post } from "./"

interface PostsProps {
  posts?: Partial<PostModelType>[]
}

const Posts: React.FC<PostsProps> = ({ posts }) =>
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

export default observer(Posts)
