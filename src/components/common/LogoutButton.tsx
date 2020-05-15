import { Button, ButtonProps } from "@chakra-ui/core"
import { observer } from "mobx-react-lite"
import React from "react"
import { useQuery } from "../../models"
import theme from "../../theme"

const LogoutButton: React.FunctionComponent<ButtonProps> = (props) => {
  const { setQuery, store } = useQuery()
  return (
    <Button
      {...theme.buttons.variants.primary}
      variant={"outline"}
      onClick={(): void => {
        setQuery(store.logout())
      }}
      isDisabled={!store.currentUser}
      {...props}
    />
  )
}

export default observer(LogoutButton)
