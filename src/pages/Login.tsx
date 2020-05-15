import React, { useState } from "react"
import { RouteComponentProps, Redirect } from "react-router-dom"
import { Box } from "@chakra-ui/core"
import LoginUserForm from "../components/common/LoginUserForm"
import { LoginMutationVariables } from "../graphql"
import useLogin from "../hooks/useLogin"
import Layout from "./Layout"

const Login: React.FunctionComponent<RouteComponentProps> = () => {
  const [login, { data }] = useLogin()
  const [errorMessage, setErrorMessage] = useState("")

  const message = !data?.login.success && data?.login.message
  if (message && message !== errorMessage) {
    setErrorMessage(message)
  }

  const handleSubmit = async (variables: LoginMutationVariables): Promise<void> => {
    login({ variables })
  }

  return data?.login.success ? (
    <Redirect to={"/"} />
  ) : (
    <Layout>
      <Box pt={8}>
        <LoginUserForm handleSubmit={handleSubmit} errorMessage={errorMessage} />
      </Box>
    </Layout>
  )
}

export default Login
