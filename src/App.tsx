import { ColorModeProvider, CSSReset, ThemeProvider } from "@chakra-ui/core"
import { css, Global } from "@emotion/core"
import React from "react"
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom"
import OnlyLoggedOutRoute from "./components/common/OnlyLoggedOutRoute"
import PrivateRoute from "./components/common/PrivateRoute"
import { rootStore } from "./getMstGql"
import { StoreContext } from "./models/reactUtils"
import { AdminDashboard } from "./pages/admin"
import Home from "./pages/Home"
import Login from "./pages/Login"
import RegisterUser from "./pages/RegisterUser"
import Test from "./pages/Test"
import User from "./pages/User"
import theme from "./styles/theme"

const App: React.FunctionComponent = () => {
  return (
    <StoreContext.Provider value={rootStore}>
      <ThemeProvider theme={theme}>
        <ColorModeProvider value="light">
          <CSSReset />
          <Global
            styles={css`
              html {
                width: 100%;
                height: 100%;
              }

              html,
              body,
              #root {
                display: flex;
                flex-direction: column;
                flex: 1;
              }
            `}
          />

          <BrowserRouter>
            <Switch>
              <Route path="/test" component={Test} />
              <OnlyLoggedOutRoute path="/login" component={Login} />
              <OnlyLoggedOutRoute path="/register" component={RegisterUser} />
              <PrivateRoute path={"/user/:userId"} component={User} />
              <PrivateRoute path="/admin" component={AdminDashboard} />
              <PrivateRoute path="*" component={Home} />
              <Route path="*" component={(): JSX.Element => <Redirect to="/" />} />
            </Switch>
          </BrowserRouter>
        </ColorModeProvider>
      </ThemeProvider>
    </StoreContext.Provider>
  )
}

export default App
