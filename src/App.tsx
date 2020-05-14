import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import getApolloClient from "./getApolloClient";
import theme from "./theme";
import { CSSReset, ThemeProvider } from "@chakra-ui/core";
import PrivateRoute from "./components/common/PrivateRoute";
import Login from "./pages/Login";
import Home from "./pages/Home";
import User from "./pages/User";
import Test from "./pages/Test";
import OnlyLoggedOutRoute from "./components/common/OnlyLoggedOutRoute";
import RegisterUser from "./pages/RegisterUser";
import { StoreContext } from "./models";
import { rootStore } from "./getMstGql";

const apolloClient = getApolloClient();

// eslint-disable-next-line @typescript-eslint/no-explicit-any
(window as any).apolloClient = apolloClient;

const App: React.FunctionComponent = () => {
  return (
    <StoreContext.Provider value={rootStore}>
      <ThemeProvider theme={theme}>
        <CSSReset />
        <BrowserRouter>
          <Switch>
            <Route path="/test" component={Test} />
            <OnlyLoggedOutRoute path="/login" component={Login} />
            <OnlyLoggedOutRoute path="/register" component={RegisterUser} />
            <PrivateRoute path={"/user/:userId"} component={User} />
            <PrivateRoute path="*" component={Home} />
          </Switch>
        </BrowserRouter>
      </ThemeProvider>
    </StoreContext.Provider>
  );
};

export default App;
