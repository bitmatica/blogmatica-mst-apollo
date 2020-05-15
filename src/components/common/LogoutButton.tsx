import React from "react"
import useLogout from "../../hooks/useLogout"
import { Redirect } from "react-router-dom"
import { Button, ButtonProps } from "@chakra-ui/core"
import theme from "../../theme"

const LogoutButton: React.FunctionComponent<ButtonProps> = (props) => {
  const [logout, { called, loading, data }] = useLogout()
  return called && !loading && data?.logout.success ? (
    <Redirect to={"login"} />
  ) : (
    <Button
      {...theme.buttons.variants.primary}
      variant={"outline"}
      onClick={(): void => {
        logout()
      }}
      {...props}>
      {props.children}
    </Button>
  )
}

export default LogoutButton
