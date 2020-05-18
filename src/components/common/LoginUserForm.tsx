import { Flex, Text } from "@chakra-ui/core"
import React, { FormEvent, useState } from "react"
import Button from "./Button"
import Form from "./Form"
import InputWithLabel from "./InputWithLabel"

interface UserLoginArgs {
  email: string
  password: string
}

interface LoginUserFormProps {
  errorMessage: string
  handleSubmit(inputs: UserLoginArgs): void
}

const LoginUserForm: React.FC<LoginUserFormProps> = ({ handleSubmit, errorMessage }) => {
  const [inputs, setInputs] = useState({ email: "", password: "" })

  const handleInputChange: React.FormEventHandler<HTMLInputElement> = (event) => {
    const { name, value } = event.currentTarget
    setInputs({ ...inputs, [name]: value })
  }

  return (
    <Form
      onSubmit={(e: FormEvent): void => {
        e.preventDefault()
        handleSubmit(inputs)
      }}
    >
      <Text fontSize={"3xl"}>Welcome back!</Text>
      <InputWithLabel
        name="email"
        type="email"
        label="Email:"
        value={inputs.email}
        placeholder="example@bitmatica.com"
        handleUpdate={handleInputChange}
        isRequired
      />
      <InputWithLabel
        name="password"
        type="password"
        label="Password:"
        value={inputs.password}
        handleUpdate={handleInputChange}
        isRequired
      />
      <Text color="red">{errorMessage}</Text>
      <Flex direction="row" justifyContent="flex-end">
        <Button type="submit" themeVariant="primary">
          Login
        </Button>
      </Flex>
    </Form>
  )
}

export default LoginUserForm
