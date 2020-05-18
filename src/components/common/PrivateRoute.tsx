import { observer } from "mobx-react-lite"
import React from "react"
import { Redirect, Route, RouteProps } from "react-router-dom"
import { useQuery } from "../../models/reactUtils"
import LoadingContainer from "./LoadingContainer"

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
  const { loading, data } = useQuery((store) => store.getCurrentUser())

  const isLoggedIn = Boolean(data?.whoAmI?.id)
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
