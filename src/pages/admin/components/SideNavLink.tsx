import { BoxProps, PseudoBox, Text } from "@chakra-ui/core"
import React from "react"

type SideNavLinkProps = BoxProps & {
  active?: boolean
}

export const SideNavLink: React.FC<SideNavLinkProps> = ({ children, active, ...props }) => {
  return (
    <PseudoBox _hover={{ backgroundColor: active ? "" : "rgba(0,0,0,0.20)" }}>
      <Text
        color="white"
        fontWeight={active ? "bold" : "normal"}
        px="4"
        py="2"
        backgroundColor={active ? "rgba(255,255,255,0.20)" : ""}
        cursor="pointer"
        {...props}
      >
        {children}
      </Text>
    </PseudoBox>
  )
}
