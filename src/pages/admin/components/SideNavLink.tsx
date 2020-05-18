import { BoxProps, PseudoBox, Text } from "@chakra-ui/core"
import React from "react"
import { Link, useLocation } from "react-router-dom"

type SideNavLinkProps = BoxProps & {
  to: string
  exact?: boolean
}

export const SideNavLink: React.FC<SideNavLinkProps> = ({
  children,
  to,
  exact,
  ...props
}) => {
  const location = useLocation()
  const active = exact ? location.pathname.endsWith(to) : location.pathname.startsWith(to)

  return (
    <Link to={to}>
      <PseudoBox _hover={{ backgroundColor: active ? "" : "rgba(0,0,0,0.20)" }}>
        <Text
          color="white"
          fontWeight={active ? "bold" : "normal"}
          px="4"
          py="2"
          backgroundColor={active ? "rgba(255,255,255,0.20)" : ""}
          cursor="pointer"
          width="100%"
          {...props}
        >
          {children}
        </Text>
      </PseudoBox>
    </Link>
  )
}
