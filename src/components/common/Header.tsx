import React from "react";
import { Text, Icon, Flex } from "@chakra-ui/core";
import LogoutButton from "./LogoutButton";
import { observer } from "mobx-react-lite"
import { useStore } from "../../getMstGql";
const ICON_MARGIN = 8;

const Header: React.FunctionComponent = () => {
  const { currentUser } = useStore()
  return (
    <Flex
      direction="row"
      align="center"
      height={16}
      color={"white"}
      backgroundColor={"primary"}>
      <Icon
        ml={ICON_MARGIN}
        name="view"
        size="24px"
      />
      <Text
        ml={ICON_MARGIN}
        fontSize={"4xl"}
      >
        Bitmatiblog
      </Text>
      <LogoutButton ml="auto" mr={4}>
        {currentUser ? "Logout" : "Logged Out"}
      </LogoutButton>
    </Flex>
  )
}

export default observer(Header)
