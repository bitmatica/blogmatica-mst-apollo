import { Box, Flex, Image, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/core"
import { observer } from "mobx-react-lite"
import React from "react"
import ColorModeSwitcher from "../../../components/common/ColorModeSwitcher"
import { useStore } from "../../../getMstGql"
import MobileNav from "./MobileNav"

const Header: React.FC = () => {
  const { currentUser, logout } = useStore()
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

          <Menu>
            <MenuButton>
              <Image
                rounded="full"
                size="38px"
                src={currentUser?.profileImageUrl}
                alt="User profile"
              />
            </MenuButton>
            <MenuList>
              <MenuItem onClick={() => logout()}>Logout</MenuItem>
            </MenuList>
          </Menu>
        </Flex>
      </Flex>
    </Box>
  )
}

export default observer(Header)
