import { useEffect } from "react"
import { useApolloClient, MutationTuple } from "@apollo/react-hooks"
import { useStore } from "../store/RootStore"
import { resetJwt } from "../utilities/jwtHelpers"
import {
  useLogoutMutation,
  WhoAmIDocument,
  LogoutMutation,
  LogoutMutationVariables,
} from "../graphql"

type UseLogoutResult = MutationTuple<LogoutMutation, LogoutMutationVariables>

export default function useLogout(): UseLogoutResult {
  const store = useStore()
  const logoutMutationResult = useLogoutMutation()
  const [, { called, loading, data }] = logoutMutationResult
  const apolloClient = useApolloClient()

  useEffect(() => {
    if (called && !loading && data?.logout.success) {
      store.currentUser.reset()
      resetJwt()
      apolloClient.writeQuery({
        query: WhoAmIDocument,
        data: { whoAmI: null },
      })
    }
  })

  return logoutMutationResult
}
