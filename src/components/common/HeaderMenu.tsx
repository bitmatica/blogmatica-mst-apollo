import { Menu, MenuButton, MenuItem, MenuList, Avatar } from "@chakra-ui/core"
import { observer } from "mobx-react-lite"
import React from "react"
import { useHistory } from "react-router-dom"
import { useQuery } from "src/models/reactUtils"
import { selectIdFromUser } from "../../models"

const HeaderMenu: React.FC = () => {
  const history = useHistory()
  const { data } = useQuery((store) => store.queryWhoAmI({}, selectIdFromUser))
  const { setQuery, store } = useQuery()
  const profileImageUrl = data?.whoAmI.profileImageUrl
  return (
    <Menu>
      <MenuButton width="38px">
        <Avatar rounded="full" src={profileImageUrl} />
      </MenuButton>
      <MenuList>
        <MenuItem onClick={(): void => history.push("/admin")}>Admin Dashboard</MenuItem>
        <MenuItem onClick={(): void => setQuery(store.logout())}>Logout</MenuItem>
      </MenuList>
    </Menu>
  )
}

export default observer(HeaderMenu)
