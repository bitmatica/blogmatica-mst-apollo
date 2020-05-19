import { Box, BoxProps } from "@chakra-ui/core"
import React from "react"

const Table: React.FC<BoxProps> = ({ children, ...props }) => (
  <Box as="table" width="100%" maxWidth="100%" {...props}>
    {children}
  </Box>
)

export default Table
