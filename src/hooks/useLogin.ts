import { MutationTuple } from "@apollo/react-hooks"
import { useEffect } from "react"
import { LoginMutation, LoginMutationVariables, useLoginMutation } from "../graphql"
import { useStore } from "../store/RootStore"
import { resetJwt, setJwt } from "../utilities/jwtHelpers"

const useLogin: () => MutationTuple<LoginMutation, LoginMutationVariables> = () => {
  const useLoginResult = useLoginMutation()
  const store = useStore()
  const [, { called, loading, data }] = useLoginResult

  useEffect(() => {
    if (called && !loading) {
      const jwt = data?.login.token
      const id = data?.login.user?.id
      const email = data?.login.user?.email

      if (jwt && id && email) {
        setJwt(jwt)
        store.currentUser.updateUser({ id, email })
      } else {
        resetJwt()
        store.currentUser.reset()
      }
    }
  })

  return useLoginResult
}

export default useLogin
