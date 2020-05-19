import { Box, BoxProps, Icon, Text } from "@chakra-ui/core"
import React from "react"

const HeaderLogo: React.FC<BoxProps> = (props) => {
  return (
    <Box display="flex" alignItems="center" color="white" {...props}>
      <Icon name="logo" size="28px" mr={[2]} />
      <Text fontSize="2xl" fontWeight="bold" fontFamily="heading">
        bitmatiblog
      </Text>
    </Box>
  )
}

export default HeaderLogo
