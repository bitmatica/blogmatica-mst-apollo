import { Box } from "@chakra-ui/core"
import React from "react"

import HeaderLogo from "../../../components/common/HeaderLogo"
import { SideNavLink } from "./SideNavLink"
import { SideNavSection } from "./SideNavSection"

const SideNavContent: React.FC = ({ ...props }) => {
  return (
    <Box as="nav" aria-label="Main navigation" fontSize="sm" {...props}>
      <HeaderLogo borderBottomWidth="1px" borderColor="rgba(255,255,255,0.16)" />
      <SideNavSection
        title="Models"
        borderBottomWidth="1px"
        borderColor="rgba(255,255,255,0.16)"
      >
        <SideNavLink active>Posts</SideNavLink>
        <SideNavLink>Comments</SideNavLink>
        <SideNavLink>Users</SideNavLink>
      </SideNavSection>
      <SideNavSection title="Models">
        <SideNavLink>Posts</SideNavLink>
        <SideNavLink>Comments</SideNavLink>
        <SideNavLink>Users</SideNavLink>
      </SideNavSection>
    </Box>
  )
}

export default SideNavContent
