import { CSSReset, ThemeProvider } from "@chakra-ui/core"
import React from "react"
import { BrowserRouter, Route, Switch } from "react-router-dom"
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
import theme from "./theme"

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
            <PrivateRoute path="/admin" component={AdminDashboard} />
            <PrivateRoute path="*" component={Home} />
          </Switch>
        </BrowserRouter>
      </ThemeProvider>
    </StoreContext.Provider>
  )
}

export default App
