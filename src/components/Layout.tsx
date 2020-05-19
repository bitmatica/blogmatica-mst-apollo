import { Box, Flex, useTheme } from "@chakra-ui/core"
import { MenuItem } from "@chakra-ui/core/dist"
import React from "react"
import { useHistory } from "react-router-dom"
import { useQuery } from "../models/reactUtils"
import { ColorModeSwitcher, Header, HeaderLogo } from "./common"
import HeaderMenu from "./common/HeaderMenu"

const Layout: React.FC = ({ children }) => {
  const theme = useTheme()
  const history = useHistory()
  const { setQuery, store } = useQuery()
  const { currentUser } = store

  return (
    <Flex
      border="1px solid black"
      alignContent="center"
      minHeight={"100vh"}
      direction="column"
    >
      <Header logo={<HeaderLogo />}>
        <ColorModeSwitcher color="white" />
        {currentUser && (
          <HeaderMenu currentUser={currentUser}>
            <MenuItem onClick={(): void => history.push("/admin")}>
              Admin Dashboard
            </MenuItem>
            <MenuItem onClick={(): void => setQuery(store.logout())}>Logout</MenuItem>
          </HeaderMenu>
        )}
      </Header>

      <Box
        maxWidth={["100%", "100%", theme.sizes["3xl"]]}
        width={[null, null, "80%"]}
        mx={[4, 4, "0 auto"]}
        pt={4}
        px={8}
        bg="blackAlpha.50"
        flexGrow={2}
        alignSelf="center"
      >
        {children}
      </Box>
    </Flex>
  )
}

export default Layout
