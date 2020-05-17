import { Box, Flex, Text } from "@chakra-ui/core"
import React, { FormEvent } from "react"
import Button from "./Button"
import Form from "./Form"
import InputWithLabel from "./InputWithLabel"

interface RegisterUserFormProps {
  inputs: { [key: string]: string | number }
  errorMessage?: string
  handleSubmit(): void
  handleUpdate(event: React.FormEvent<HTMLInputElement>): void
}

const RegisterUserForm: React.FC<RegisterUserFormProps> = ({
  inputs,
  errorMessage,
  handleSubmit,
  handleUpdate,
}) => {
  return (
    <Form
      onSubmit={(event: FormEvent): void => {
        if (event) {
          event.preventDefault()
        }
        handleSubmit()
      }}
    >
      <Text fontSize={"3xl"}>Get on board!</Text>
      <InputWithLabel
        name="email"
        type="email"
        label="Email:"
        value={inputs.email}
        placeholder="example@bitmatica.com"
        handleUpdate={handleUpdate}
      />
      <InputWithLabel
        name="password"
        type="password"
        mb={0}
        label="Password:"
        value={inputs.password}
        isRequired
        handleUpdate={handleUpdate}
      />
      <Box minH={8} color="red" textAlign="center">
        {errorMessage}
      </Box>
      <Flex direction="row" justifyContent="flex-end">
        <Button type="submit" themeVariant="primary">
          Login
        </Button>
      </Flex>
    </Form>
  )
}

export default RegisterUserForm
