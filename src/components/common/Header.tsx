import { Flex } from "@chakra-ui/core"
import { observer } from "mobx-react-lite"
import React from "react"
import { useStore } from "../../getMstGql"
import ColorModeSwitcher from "./ColorModeSwitcher"
import HeaderLogo from "./HeaderLogo"
import HeaderMenu from "./HeaderMenu"

const Header: React.FunctionComponent = () => {
  const { currentUser } = useStore()
  return (
    <Flex
      direction="row"
      align="center"
      height="headerHeight"
      backgroundColor={"primary"}
      px="4"
    >
      <HeaderLogo />
      <Flex width="100%" align="center" justify="flex-end">
        <ColorModeSwitcher color="white" />
        {currentUser && <HeaderMenu />}
      </Flex>
    </Flex>
  )
}

export default observer(Header)
