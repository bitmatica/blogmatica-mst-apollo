import { Box } from "@chakra-ui/core"
import React from "react"

import HeaderLogo from "../../../components/common/HeaderLogo"
import { getModelLink, getRegisteredModels } from "../utils"
import { SideNavLink } from "./SideNavLink"
import { SideNavSection } from "./SideNavSection"

const SideNavContent: React.FC = ({ ...props }) => {
  return (
    <Box as="nav" aria-label="Main navigation" fontSize="sm" {...props}>
      <HeaderLogo borderBottomWidth="1px" borderColor="rgba(255,255,255,0.16)" />
      <SideNavSection title="Admin">
        <SideNavLink to="/admin" exact>
          Dashboard
        </SideNavLink>
      </SideNavSection>

      <SideNavSection title="Models">
        {getRegisteredModels().map((config) => (
          <SideNavLink key={config.model.name} to={getModelLink(config)}>
            {config.model.name}
          </SideNavLink>
        ))}
      </SideNavSection>
    </Box>
  )
}

export default SideNavContent
