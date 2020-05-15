import { observer } from "mobx-react-lite"
import React from "react"
import { Redirect, Route, RouteProps } from "react-router-dom"
import { useStore } from "../../getMstGql"
import { useQuery } from "../../models"
import LoadingContainer from "./LoadingContainer"

interface PrivateRouteProps extends RouteProps {
  redirect?: string
  mustBeLoggedOut?: boolean
}

const PrivateRoute: React.FunctionComponent<PrivateRouteProps> = ({
  redirect,
  location,
  mustBeLoggedOut,
  ...rest
}) => {
  const { loading } = useQuery((store) => store.getCurrentUser())
  const { currentUser } = useStore()

  const isLoggedIn = Boolean(currentUser?.id)
  const shouldRedirect = mustBeLoggedOut ? isLoggedIn : !isLoggedIn

  return (
    <LoadingContainer loading={loading}>
      {shouldRedirect ? (
        <Redirect
          to={{
            pathname: redirect || "/login",
            state: { from: location },
          }}
        />
      ) : (
        <Route {...rest} />
      )}
    </LoadingContainer>
  )
}

export default observer(PrivateRoute)
