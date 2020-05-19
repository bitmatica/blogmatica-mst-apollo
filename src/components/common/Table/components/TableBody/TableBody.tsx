import { Box, BoxProps } from "@chakra-ui/core"
import React from "react"

const TableBody: React.FC<BoxProps> = ({ children, ...props }) => (
  <Box as="tbody" {...props}>
    {children}
  </Box>
)

export default TableBody
