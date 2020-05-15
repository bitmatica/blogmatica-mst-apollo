import React, { FormEvent } from "react"
import { Text, Flex, Box } from "@chakra-ui/core"
import Form from "./Form"
import InputWithLabel from "./InputWithLabel"
import Button from "./Button"


interface RegisterUserFormProps {
  inputs: { [key: string]: string | number }
  errorMessage?: string
  handleSubmit(): void
  handleUpdate(event: React.FormEvent<HTMLInputElement>): void
}

const RegisterUserForm: React.FunctionComponent<RegisterUserFormProps> = ({
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
        handleSubmit();
      }}>
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
      <Box minH={8} color="red" textAlign="center">{errorMessage}</Box>
      <Flex direction="row" justifyContent="flex-end">
        <Button type="submit" themeVariant="primary">
          Login
        </Button>
      </Flex>

    </Form>
  );
};

export default RegisterUserForm
