import { Box, BoxProps } from "@chakra-ui/core/dist"
import React from "react"

import TableBody from "./components/TableBody"
import TableHead from "./components/TableHead"

type CommonComponents = {
  Body: typeof TableBody
  Head: typeof TableHead
}

const Table: React.FC<BoxProps> & CommonComponents = ({ children, ...props }) => (
  <Box as="table" width="100%" maxWidth="100%" {...props}>
    {children}
  </Box>
)

Table.Body = TableBody
Table.Head = TableHead

export default Table
