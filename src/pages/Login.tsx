import { Box } from "@chakra-ui/core"
import { observer } from "mobx-react-lite"
import React, { useState } from "react"
import { Redirect, RouteComponentProps } from "react-router-dom"
import { Layout, LoginUserForm, LoadingContainer } from "../components"
import { useQuery } from "../models/reactUtils"
import { UserLoginArgs } from "../models/RootStore.base"


const Login: React.FC<RouteComponentProps> = () => {
  const { setQuery, store, error } = useQuery()
  const [errorMessage, setErrorMessage] = useState("")

  if (error && error !== errorMessage) {
    setErrorMessage(error)
  }

  const handleSubmit = async (variables: UserLoginArgs): Promise<void> => {
    setQuery((store) => store.login(variables))
  }
  const { loading, data } = store.getCurrentUser()
  debugger
  return (
    <LoadingContainer loading={loading}>
      {data?.whoAmI ? (
        <Redirect to={"/"} />
      ) : (
        <Layout>
          <Box>
            <LoginUserForm handleSubmit={handleSubmit} errorMessage={errorMessage} />
          </Box>
        </Layout>
      )}
    </LoadingContainer>
  )
}


export default observer(Login)
