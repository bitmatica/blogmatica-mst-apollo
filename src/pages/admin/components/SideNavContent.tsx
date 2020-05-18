import { Box } from "@chakra-ui/core"
import React from "react"

import HeaderLogo from "../../../components/common/HeaderLogo"
import { REGISTERED_MODELS } from "../config"
import { getModelLink } from "../utils"
import { SideNavLink } from "./SideNavLink"
import { SideNavSection } from "./SideNavSection"

const SideNavContent: React.FC = ({ ...props }) => {
  return (
    <Box as="nav" aria-label="Main navigation" fontSize="sm" {...props}>
      <HeaderLogo borderBottomWidth="1px" borderColor="rgba(255,255,255,0.16)" />
      <SideNavSection title="Models">
        {REGISTERED_MODELS.map((model) => {
          return (
            <SideNavLink key={model.name} to={getModelLink(model)}>
              {model.name}
            </SideNavLink>
          )
        })}
      </SideNavSection>
    </Box>
  )
}

export default SideNavContent
