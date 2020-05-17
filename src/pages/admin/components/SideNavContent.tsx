import { Box } from "@chakra-ui/core"
import React from "react"

import HeaderLogo from "../../../components/common/HeaderLogo"

const SideNavContent: React.FC = ({ ...props }) => (
  <Box as="nav" aria-label="Main navigation" fontSize="sm" {...props}>
    <HeaderLogo />
    <Box mt="6"></Box>
  </Box>
)

export default SideNavContent
