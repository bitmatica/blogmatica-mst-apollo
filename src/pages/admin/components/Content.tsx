import { Box, Flex } from "@chakra-ui/core"
import React from "react"

const Content: React.FC = ({ children }) => {
  return (
    <Box ml={[0, null, "sideNavWidth"]} mt="headerHeight" height="100%">
      <Flex as="main" width="100%" direction="column" minHeight="100%">
        {children}
      </Flex>
    </Box>
  )
}

export default Content
