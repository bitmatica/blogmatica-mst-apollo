import React, { useState, FormEvent } from "react"
import { Text, Button, Flex } from "@chakra-ui/core"
import InputWithLabel from "./InputWithLabel"
import theme from "../../theme"
import Form from "./Form"

interface UserLoginArgs {
  email: string
  password: string
}

interface LoginUserFormProps {
  errorMessage: string
  handleSubmit(inputs: UserLoginArgs): void
}

const LoginUserForm: React.FunctionComponent<LoginUserFormProps> = ({
  handleSubmit,
  errorMessage,
}) => {
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
        autoComplete="email"
        label="Email:"
        value={inputs.email}
        placeholder="example@bitmatica.com"
        onChange={handleInputChange}
        display="inline-block"
      />
      <InputWithLabel
        name="password"
        type="password"
        autoComplete="password"
        label="Password:"
        value={inputs.password}
        isRequired
        onChange={handleInputChange}
      />
      <Flex direction="row" justifyContent="flex-end">
        <Button {...theme.buttons.variants.primary} type="submit">
          Login
        </Button>
      </Flex>
      <Text color="red">{errorMessage}</Text>
    </Form>
  )
}

export default LoginUserForm
