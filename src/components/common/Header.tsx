import { Flex } from "@chakra-ui/core"
import React from "react"
import { Link } from "react-router-dom"
import { HeaderLogo } from "./"

export type HeaderProps = {
  logo: JSX.Element
}

const Header: React.FC<HeaderProps> = ({ logo, children }) => {
  return (
    <Flex
      direction="row"
      align="center"
      height="headerHeight"
      backgroundColor={"primary"}
      px="4"
    >
      <Flex align="center" height="headerHeight" px={4}>
        <Link to="/" aria-label="Chakra UI, Back to homepage">
          {logo}
          <HeaderLogo />
        </Link>
      </Flex>

      <Flex width="100%" align="center" justify="flex-end">
        {children}
      </Flex>
    </Flex>
  )
}

export default Header
