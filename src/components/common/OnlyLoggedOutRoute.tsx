import React from "react"
import { RouteProps } from "react-router-dom"
import PrivateRoute from "./PrivateRoute"

interface OnlyLoggedOutRouteProps extends RouteProps {
  redirect?: string
}

export const OnlyLoggedOutRoute: React.FC<OnlyLoggedOutRouteProps> = ({
  redirect,
  ...rest
}) => {
  return <PrivateRoute redirect={redirect || "/"} mustBeLoggedOut={true} {...rest} />
}

export default OnlyLoggedOutRoute
