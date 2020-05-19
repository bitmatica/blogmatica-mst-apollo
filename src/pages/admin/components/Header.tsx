import { Box, Flex } from "@chakra-ui/core"
import React from "react"
import { ColorModeSwitcher, HeaderMenu } from "src/components"
import MobileNav from "./MobileNav"

const Header: React.FC = () => {
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
          <HeaderMenu />
        </Flex>
      </Flex>
    </Box>
  )
}

export default Header
