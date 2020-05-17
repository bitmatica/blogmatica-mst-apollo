import { Box } from "@chakra-ui/core"
import React from "react"

import SideNavLogo from "./SideNavLogo"

const SideNavContent: React.FC = ({ ...props }) => (
  <Box as="nav" aria-label="Main navigation" fontSize="sm" {...props}>
    <SideNavLogo />
    <Box mt="6"></Box>
  </Box>
)

export default SideNavContent
