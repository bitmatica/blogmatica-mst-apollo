import React, { useState } from "react"
import { Redirect } from "react-router-dom"
import RegisterUserForm from "../components/common/RegisterUserForm"
import { CreateUserMutationVariables, useCreateUserMutation } from "../graphql"
import useLogin from "../hooks/useLogin"
import Layout from "./Layout"

const INITIAL_REGISTER_USER_FORM_STATE = {
  email: "",
  password: "",
}

const RegisterUser: React.FunctionComponent = () => {
  const [inputs, setInputs] = useState(INITIAL_REGISTER_USER_FORM_STATE)
  const [createUser, { data: registerUserData }] = useCreateUserMutation()
  const [login, { called, loading, data: loginData }] = useLogin()

  if (registerUserData?.createUser.success && !called) {
    login({ variables: inputs })
  }

  const handleSubmit = (): void => {
    createUser({ variables: inputs })
  }

  const handleUpdate = (event: React.FormEvent<HTMLInputElement>): void => {
    const { name, value } = event.currentTarget
    setInputs((inputs): CreateUserMutationVariables => ({ ...inputs, [name]: value }))
  }

  return !loading && loginData?.login.success ? (
    <Redirect to="/" />
  ) : (
    <Layout>
      <RegisterUserForm
        inputs={inputs}
        errorMessage={registerUserData?.createUser.message}
        handleSubmit={handleSubmit}
        handleUpdate={handleUpdate}
      />
    </Layout>
  )
}

export default RegisterUser
