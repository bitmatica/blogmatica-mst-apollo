import React from "react";
import { BrowserRouter, Switch } from "react-router-dom";
import { ApolloProvider } from "@apollo/react-hooks";
import getApolloClient from "./getApolloClient";
import theme from "./theme";
import { CSSReset, ThemeProvider } from "@chakra-ui/core";
import { StoreProvider, useStore } from "./store/RootStore";
import PrivateRoute from "./components/common/PrivateRoute";
import Login from "./pages/Login";
import Home from "./pages/Home";
import User from "./pages/User";
import OAuthApps from "./pages/OAuthApps";
import GustoAPI from "./pages/GustoAPI";
import OnlyLoggedOutRoute from "./components/common/OnlyLoggedOutRoute";
import RegisterUser from "./pages/RegisterUser";

const apolloClient = getApolloClient();

// eslint-disable-next-line @typescript-eslint/no-explicit-any
(window as any).apolloClient = apolloClient;

const App: React.FunctionComponent = () => {
  const store = useStore();
  return (
    <StoreProvider value={store}>
      <ThemeProvider theme={theme}>
        <CSSReset />
        <BrowserRouter>
          <ApolloProvider client={apolloClient}>
            <Switch>
              <OnlyLoggedOutRoute path="/login" component={Login} />
              <OnlyLoggedOutRoute path="/register" component={RegisterUser} />
              <PrivateRoute path={"/user/:userId"} component={User} />
              <PrivateRoute path={"/apps/connect"} component={OAuthApps} />
            <PrivateRoute path={"/gusto/*"} component={GustoAPI} />
              <PrivateRoute path="*" component={Home} />
            </Switch>
          </ApolloProvider>
        </BrowserRouter>
      </ThemeProvider>
    </StoreProvider>
  );
};

export default App;
