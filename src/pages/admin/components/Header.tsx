import { Box, Flex } from "@chakra-ui/core"
import { MenuItem } from "@chakra-ui/core/dist"
import { observer } from "mobx-react-lite"
import React from "react"
import { useHistory } from "react-router-dom"
import { ColorModeSwitcher, HeaderMenu } from "src/components"
import { useQuery } from "../../../models/reactUtils"
import MobileNav from "./MobileNav"

const Header: React.FC = () => {
  const history = useHistory()
  const { setQuery, store } = useQuery()
  const { currentUser } = store

  return (
    <Box
      as="header"
      pos="fixed"
      top="0"
      zIndex={4}
      left={[0, null, "sideNavWidth"]}
      right="0"
      borderBottomWidth="1px"
      height="headerHeight"
    >
      <Flex size="100%" px="3" align="center" color="gray.500">
        <MobileNav />
        <Flex width="100%" justify="flex-end" align="center">
          <ColorModeSwitcher />
          {currentUser && (
            <HeaderMenu currentUser={currentUser}>
              <MenuItem onClick={(): void => history.push("/admin")}>
                Admin Dashboard
              </MenuItem>
              <MenuItem onClick={(): void => setQuery(store.logout())}>Logout</MenuItem>
            </HeaderMenu>
          )}
        </Flex>
      </Flex>
    </Box>
  )
}

export default observer(Header)
