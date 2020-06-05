import { observer } from "mobx-react-lite"
import React, { Fragment } from "react"
import { useStore } from "src/getMstGql"
import { usePromise } from "src/utilities/promises"

const AuthProvider: React.FC = observer(({ children }) => {
  const store = useStore()
  const { loading } = usePromise(store.initializeApp())

  return loading ? null : <Fragment>{children}</Fragment>
})

export default AuthProvider
