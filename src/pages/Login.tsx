import { Box } from "@chakra-ui/core"
import { observer } from "mobx-react-lite"
import React, { useState } from "react"
import { Redirect, RouteComponentProps } from "react-router-dom"
import LoginUserForm from "../components/common/LoginUserForm"
import Layout from "../components/Layout"
import { useQuery } from "../models/reactUtils"
import { UserLoginArgs } from "../models/RootStore.base"

const Login: React.FunctionComponent<RouteComponentProps> = () => {
  const { setQuery, store, error } = useQuery()
  const [errorMessage, setErrorMessage] = useState("")

  if (error && error !== errorMessage) {
    setErrorMessage(error)
  }

  const handleSubmit = async (variables: UserLoginArgs): Promise<void> => {
    setQuery((store) => store.login(variables))
  }

  return store.isLoggedIn() ? (
    <Redirect to={"/"} />
  ) : (
    <Layout>
      <Box>
        <LoginUserForm handleSubmit={handleSubmit} errorMessage={errorMessage} />
      </Box>
    </Layout>
  )
}

export default observer(Login)
