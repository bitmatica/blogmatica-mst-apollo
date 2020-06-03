import { observer } from "mobx-react-lite"
import React from "react"
import { Redirect, Route, RouteProps } from "react-router-dom"
import { useStore } from "../../getMstGql"

interface PrivateRouteProps extends RouteProps {
  redirect?: string
  mustBeLoggedOut?: boolean
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({
  redirect,
  location,
  mustBeLoggedOut,
  ...rest
}) => {
  const store = useStore()

  const isLoggedIn = store.authentication.isLoggedIn()
  const shouldRedirect = mustBeLoggedOut ? isLoggedIn : !isLoggedIn

  return (
    shouldRedirect ? (
      <Redirect
        to={{
          pathname: redirect || "/login",
          state: { from: location },
        }}
      />
    ) : (
      <Route {...rest} />
    )
  )
}

export default observer(PrivateRoute)
