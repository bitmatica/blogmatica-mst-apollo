import { Link as ChakraLink, LinkProps as ChakraLinkProps } from "@chakra-ui/core"
import React from "react"
import { Link as RouterLink, LinkProps as RouterLinkProps } from "react-router-dom"

export type LinkProps = RouterLinkProps & ChakraLinkProps

const Link: React.FC<LinkProps> = (props) => (
  <ChakraLink as={RouterLink as any} {...props} />
)

export default Link
