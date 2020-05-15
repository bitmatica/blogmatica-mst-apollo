import React, { useState } from "react"
import useCreatePost from "../hooks/useCreatePost"

interface CreatePostFormProps {
  authorId: string
}

const CreatePostForm: React.FunctionComponent<CreatePostFormProps> = ({ authorId }) => {
  const [createPost] = useCreatePost()
  const [title, setTitle] = useState("")
  const [body, setBody] = useState("")
  const post = {
    title,
    authorId,
    body,
  }
  return (
    <form
      onSubmit={(e): void => {
        e.preventDefault()
        createPost({ variables: { post } })
      }}>
      Create Post:
      <input value={title} onChange={(newTitle): void => setTitle(newTitle.target.value)} />
      <input value={body} onChange={(newBody): void => setBody(newBody.target.value)} />
      <input value="Submit" type="submit" />
    </form>
  )
}

export default CreatePostForm
