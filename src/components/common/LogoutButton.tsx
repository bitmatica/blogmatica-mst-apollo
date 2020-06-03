import { Button, ButtonProps, useTheme } from "@chakra-ui/core"
import { observer } from "mobx-react-lite"
import React from "react"
import { useQuery } from "src/models/reactUtils"

const LogoutButton: React.FC<ButtonProps> = ({ children, ...props }) => {
  const { setQuery, store } = useQuery()
  const theme = useTheme()

  return (
    <Button
      {...theme.buttons.variants.primary}
      variant={"outline"}
      onClick={(): void => {
        setQuery(store.logout())
      }}
      isDisabled={!store.authentication.isLoggedIn()}
      {...props}
    >
      {children}
    </Button>
  )
}

export default observer(LogoutButton)
