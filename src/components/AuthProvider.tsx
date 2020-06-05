import { observer } from "mobx-react-lite"
import React, { Fragment, useEffect } from "react"
import { useStore } from "src/getMstGql"

const AuthProvider: React.FC = observer(({ children }) => {
  const store = useStore()
  useEffect(() => {
    store.initializeApp()
  }, [store])

  return !store.initialized ? null : <Fragment>{children}</Fragment>
})

export default AuthProvider
