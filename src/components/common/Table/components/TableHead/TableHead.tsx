import { Box } from "@chakra-ui/core"
import React from "react"

import TableHeadCell from "./TableHeadCell"
import TableHeadRow from "./TableHeadRow"

type CommonComponents = {
  Cell: typeof TableHeadCell
  Row: typeof TableHeadRow
}

const TableHead: React.FC & CommonComponents = ({ children, ...props }) => (
  <Box as="thead" {...props}>
    {children}
  </Box>
)

TableHead.Cell = TableHeadCell
TableHead.Row = TableHeadRow

export default TableHead
