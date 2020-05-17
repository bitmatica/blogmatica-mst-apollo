import { Box, Flex } from "@chakra-ui/core"
import React from "react"
import ColorModeSwitcher from "../../../components/common/ColorModeSwitcher"

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
      <Flex size="100%" px="6" align="center" justify="flex-end">
        <Flex align="center" color="gray.500">
          <ColorModeSwitcher />
        </Flex>
      </Flex>
    </Box>
  )
}

export default Header
