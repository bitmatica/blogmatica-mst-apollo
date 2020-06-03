import React, { Fragment } from "react"
import { observer } from "mobx-react-lite"
import { useQuery } from "../models/reactUtils"

const AuthProvider: React.FC = observer(({ children }) => {
  const { loading } = useQuery((store) => store.refreshTokenAndSetTimeOut())
  return loading ? null : <Fragment>{children}</Fragment>
})

export default AuthProvider
