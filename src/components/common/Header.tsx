import React from "react";
import LogoutButton from "./LogoutButton";
import { useStore } from "../../store/RootStore";
import { observer } from "mobx-react-lite";
import { Text, Icon, Flex } from "@chakra-ui/core";

const ICON_MARGIN = 8;

const Header: React.FunctionComponent = () => {
  const store = useStore();
  return (
    <Flex
      direction="row"
      align="center"
      height={16}
      color={"white"}
      backgroundColor={"primary"}>
      <Icon ml={ICON_MARGIN} name="view" size="24px" />
      <Text ml={ICON_MARGIN} fontSize={"4xl"}>
        Bitmatiblog
      </Text>
      {store.currentUser.id && (
        <LogoutButton ml="auto" mr={4}>
          Logout
        </LogoutButton>
      )}
    </Flex>
  );
};

export default observer(Header);
