import { Box, BoxProps } from "@chakra-ui/core"
import React from "react"

const TableHeadRow: React.FC<BoxProps> = ({ children, ...props }) => (
  <Box as="tr" {...props}>
    {children}
  </Box>
)

export default TableHeadRow
