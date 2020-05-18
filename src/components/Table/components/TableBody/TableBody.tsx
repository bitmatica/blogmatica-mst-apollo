import { Box, BoxProps } from "@chakra-ui/core"
import React from "react"
import TableBodyCell from "./TableBodyCell"
import TableBodyRow from "./TableBodyRow"

type CommonComponents = {
  Cell: typeof TableBodyCell
  Row: typeof TableBodyRow
}

const TableBody: React.FC<BoxProps> & CommonComponents = ({ children, ...props }) => (
  <Box as="tbody" {...props}>
    {children}
  </Box>
)

TableBody.Cell = TableBodyCell
TableBody.Row = TableBodyRow

export default TableBody
