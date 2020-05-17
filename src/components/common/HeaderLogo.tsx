import { Box, Flex, FlexProps, Icon, Text } from "@chakra-ui/core"
import React from "react"
import { Link } from "react-router-dom"

const HeaderLogo: React.FC<FlexProps> = (props) => {
  return (
    <Flex align="center" height="headerHeight" px={4} {...props}>
      <Link to="/" aria-label="Chakra UI, Back to homepage">
        <Box display="flex" alignItems="center" color="white">
          <Icon name="logo" size="28px" mr={[2]} />
          <Text fontSize="2xl" fontWeight="bold" fontFamily="heading">
            bitmatiblog
          </Text>
        </Box>
      </Link>
    </Flex>
  )
}

export default HeaderLogo
