import { Box } from "@chakra-ui/core"
import React from "react"

const TableHead: React.FC = ({ children, ...props }) => (
  <Box as="thead" {...props}>
    {children}
  </Box>
)

export default TableHead
