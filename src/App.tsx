import { ColorModeProvider, CSSReset, ThemeProvider } from "@chakra-ui/core"
import { css, Global } from "@emotion/core"
import React, { Fragment } from "react"
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom"
import { OnlyLoggedOutRoute, PrivateRoute } from "./components"
import { rootStore } from "./getMstGql"
import { StoreContext, useQuery } from "./models/reactUtils"
import { AdminDashboard } from "./pages/admin"
import Home from "./pages/Home"
import Login from "./pages/Login"
import RegisterUser from "./pages/RegisterUser"
import User from "./pages/User"
import theme from "./styles/theme"
import { observer } from "mobx-react-lite"

const AuthProvider: React.FC = observer(({ children }) => {
  const { loading } = useQuery((store) => store.refreshTokenAndSetTimeOut())
  return loading ? null : <Fragment>{children}</Fragment>
})

const App: React.FC = () => (
  <StoreContext.Provider value={rootStore}>
    <AuthProvider>
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
    </AuthProvider>
  </StoreContext.Provider>
)

export default App
