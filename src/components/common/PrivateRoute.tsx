import React from "react";
import { Route, Redirect, RouteProps } from "react-router-dom";
import LoadingContainer from "./LoadingContainer";
import useGetCurrentUser from "../../hooks/useGetCurrentUser";

interface PrivateRouteProps extends RouteProps {
  redirect?: string;
  mustBeLoggedOut?: boolean;
}

const PrivateRoute: React.FunctionComponent<PrivateRouteProps> = ({
  redirect,
  location,
  mustBeLoggedOut,
  ...rest
}) => {
  const { loading, data } = useGetCurrentUser();
  if (loading) {
    return null;
  }

  const isLoggedIn = data?.whoAmI;
  const shouldRedirect = mustBeLoggedOut ? isLoggedIn : !isLoggedIn;
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

export default PrivateRoute
