import { Box, Flex, Icon, Text } from "@chakra-ui/core"
import React from "react"
import { Link } from "react-router-dom"

const SideNavLogo: React.FC = () => {
  return (
    <Flex
      align="center"
      height="headerHeight"
      borderBottomWidth="1px"
      borderColor="rgba(255,255,255,0.16)"
      px={4}
    >
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

export default SideNavLogo
