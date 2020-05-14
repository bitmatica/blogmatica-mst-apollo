import React from "react";
import Header from "../components/common/Header";
import { Flex, Box } from "@chakra-ui/core";
import theme from "../theme";

const Layout: React.FunctionComponent = ({ children }) => {
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
  );
};

export default Layout;
