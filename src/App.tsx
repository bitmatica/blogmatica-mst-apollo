import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import theme from "./theme";
import { CSSReset, ThemeProvider } from "@chakra-ui/core";
import { StoreContext } from "./models";
import { rootStore } from "./getMstGql";
import PrivateRoute from "./components/common/PrivateRoute"
import OnlyLoggedOutRoute from "./components/common/OnlyLoggedOutRoute"
import RegisterUser from "./pages/RegisterUser"
import Login from "./pages/Login"
import Home from "./pages/Home"
import User from "./pages/User"
import Test from "./pages/Test";


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

export default App
