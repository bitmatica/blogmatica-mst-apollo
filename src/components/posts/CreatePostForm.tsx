import { Button } from "@chakra-ui/core"
import React, { useState } from "react"
import { Form, InputWithLabel } from "../"
import { useQuery } from "../../models/reactUtils"

interface CreatePostFormProps {
  authorId: string
}

const CreatePostForm: React.FC<CreatePostFormProps> = () => {
  const { setQuery } = useQuery()
  const [title, setTitle] = useState("")
  const [body, setBody] = useState("")
  const post = {
    title,
    body,
  }
  return (
    <Form
      onSubmit={(e): void => {
        e.preventDefault()
        setQuery((store) => store.createPost(post))
      }}
    >
      Create Post:
      <InputWithLabel
        value={title}
        name="title"
        label="Title:"
        handleUpdate={(e: React.ChangeEvent<HTMLInputElement>): void => {
          setTitle(e.target.value)
        }}
      />
      <InputWithLabel
        value={body}
        name="body"
        label="Body:"
        handleUpdate={(e: React.ChangeEvent<HTMLInputElement>): void => {
          setBody(e.target.value)
        }}
      />
      <Button type="submit">Submit</Button>
    </Form>
  )
}

export default CreatePostForm
