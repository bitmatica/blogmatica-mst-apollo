import { Box, Flex, useTheme } from "@chakra-ui/core"
import React from "react"
import Header from "./common/Header"

const Layout: React.FunctionComponent = ({ children }) => {
  const theme = useTheme()

  return (
    <Flex
      border="1px solid black"
      alignContent="center"
      minHeight={"100vh"}
      direction="column"
    >
      <Header />
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
