import { observer } from "mobx-react-lite"
import React, { Fragment } from "react"
import { usePromise, useStore } from "src/getMstGql"

const AuthProvider: React.FC = observer(({ children }) => {
  const store = useStore()
  const { loading } = usePromise(store.initializeApp())

  return loading ? null : <Fragment>{children}</Fragment>
})

export default AuthProvider
