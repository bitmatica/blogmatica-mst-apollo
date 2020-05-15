import React from "react"
import { Button, ButtonProps } from "@chakra-ui/core"
import theme from "../../theme"
import { useQuery } from "../../models"
import { observer } from "mobx-react-lite"

const LogoutButton: React.FunctionComponent<ButtonProps> = (props) => {
  const { setQuery, store } = useQuery()
  return (
    <Button
      {...theme.buttons.variants.primary}
      variant={"outline"}
      onClick={(): void => {
        store.currentUser && setQuery(store.logout()) }
      }
      isDisabled={!store.currentUser}
      {...props}
    />
  )
}

export default observer(LogoutButton);
