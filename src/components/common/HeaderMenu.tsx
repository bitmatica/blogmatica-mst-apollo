import { Image, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/core"
import { observer } from "mobx-react-lite"
import React from "react"
import { useHistory } from "react-router-dom"
import { useQuery } from "src/models/reactUtils"

const HeaderMenu: React.FC = () => {
  const history = useHistory()
  const { setQuery, store } = useQuery()
  return (
    <Menu>
      <MenuButton>
        <Image
          rounded="full"
          size="38px"
          src={store.currentUser?.profileImageUrl}
          alt="User profile"
        />
      </MenuButton>
      <MenuList>
        <MenuItem onClick={(): void => history.push("/admin")}>Admin Dashboard</MenuItem>
        <MenuItem onClick={(): void => setQuery(store.logout())}>Logout</MenuItem>
      </MenuList>
    </Menu>
  )
}

export default observer(HeaderMenu)
