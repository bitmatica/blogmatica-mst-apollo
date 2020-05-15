import React, { useState } from "react"
import { Redirect } from "react-router-dom"
import RegisterUserForm from "../components/common/RegisterUserForm"
import Layout from "../components/Layout"
import { useQuery } from "../models"
import { CreateUserInput } from "../models/RootStore.base"
import LoadingContainer from "../components/common/LoadingContainer"

const INITIAL_REGISTER_USER_FORM_STATE = {
  email: "",
  password: "",
}

const RegisterUser: React.FunctionComponent = () => {
  const [inputs, setInputs] = useState(INITIAL_REGISTER_USER_FORM_STATE)
  const { setQuery, loading, store, error } = useQuery()

  const handleSubmit = (): void => {
    setQuery(store.createUserAndLogin(inputs))
  }

  const handleUpdate = (event: React.FormEvent<HTMLInputElement>): void => {
    const { name, value } = event.currentTarget;
    setInputs((inputs): CreateUserInput => ({ ...inputs, [name]: value }));
  }

  return store.currentUser ? (
    <Redirect to="/" />
  ) : (
    <Layout>
      <LoadingContainer loading={loading}>
        <RegisterUserForm
          inputs={inputs}
          errorMessage={error}
          handleSubmit={handleSubmit}
          handleUpdate={handleUpdate}
        />
      </LoadingContainer>
    </Layout>
  )
}

export default RegisterUser
