import React from "react";
import LogoutButton from "./LogoutButton";
import { Text, Icon, Flex } from "@chakra-ui/core";
import { useWhoAmIQuery } from "../../graphql";
import LoadingContainer from "./LoadingContainer";

const ICON_MARGIN = 8;

const Header: React.FunctionComponent = () => {
  const { loading, data } = useWhoAmIQuery({ pollInterval: 400 })

  return (
    <LoadingContainer loading={loading}>
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
        {data?.whoAmI && (
          <LogoutButton ml="auto" mr={4}>
            Logout
          </LogoutButton>
        )}
      </Flex>
    </LoadingContainer>
  )
}

export default Header
