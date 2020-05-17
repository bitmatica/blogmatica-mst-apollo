import { Flex, Icon, Text } from "@chakra-ui/core"
import { observer } from "mobx-react-lite"
import React from "react"
import { useStore } from "../../getMstGql"
import LogoutButton from "./LogoutButton"

const ICON_MARGIN = 8

const Header: React.FunctionComponent = () => {
  const { currentUser } = useStore()
  return (
    <Flex
      direction="row"
      align="center"
      height={16}
      color={"white"}
      backgroundColor={"primary"}
    >
      <Icon ml={ICON_MARGIN} name="logo" size="24px" />
      <Text ml={ICON_MARGIN} fontSize={"4xl"}>
        Bitmatiblog
      </Text>
      <LogoutButton ml="auto" mr={4}>
        {currentUser ? "Logout" : "Logged Out"}
      </LogoutButton>
    </Flex>
  )
}

export default observer(Header)
