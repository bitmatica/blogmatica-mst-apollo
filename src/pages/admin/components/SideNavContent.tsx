import { Box } from "@chakra-ui/core"
import React from "react"

import HeaderLogo from "../../../components/common/HeaderLogo"

const SideNavContent: React.FC = ({ ...props }) => (
  <Box as="nav" aria-label="Main navigation" fontSize="sm" {...props}>
    <HeaderLogo borderBottomWidth="1px" borderColor="rgba(255,255,255,0.16)" />
    <Box mt="6" />
  </Box>
)

export default SideNavContent
