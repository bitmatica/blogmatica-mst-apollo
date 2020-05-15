import React from "react"
import PrivateRoute from "./PrivateRoute"
import { RouteProps } from "react-router-dom"

interface OnlyLoggedOutRouteProps extends RouteProps {
  redirect?: string
}

export const OnlyLoggedOutRoute: React.FunctionComponent<OnlyLoggedOutRouteProps> = ({
  redirect,
  ...rest
}) => {
  return <PrivateRoute redirect={redirect || "/"} mustBeLoggedOut={true} {...rest} />
}

export default OnlyLoggedOutRoute
