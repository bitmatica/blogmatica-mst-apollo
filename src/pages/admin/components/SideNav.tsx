import { Box } from "@chakra-ui/core"
import React from "react"
import SideNavContent from "./SideNavContent"

const SideNav: React.FC = () => {
  return (
    <Box
      as="aside"
      position="fixed"
      left="0"
      width="100%"
      height="100%"
      top="0"
      right="0"
      bg="primary"
      display={["none", null, "block"]}
      maxWidth="sideNavWidth"
    >
      <Box position="relative" overflowY="auto" height="full">
        <SideNavContent />
      </Box>
    </Box>
  )
}

export default SideNav
