import { Box } from "@chakra-ui/core"
import React from "react"

const Content: React.FC = ({ children }) => {
  return (
    <Box ml={[0, null, "sideNavWidth"]} mt="headerHeight" height="100%">
      <Box as="main" height="100%" mx="auto">
        {children}
      </Box>
    </Box>
  )
}

export default Content
