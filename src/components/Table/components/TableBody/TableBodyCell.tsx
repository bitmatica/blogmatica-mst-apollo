import { PseudoBox, PseudoBoxProps, Text, useColorMode } from "@chakra-ui/core"
import React, { useMemo } from "react"

import { sharedCellProps } from "../sharedStyles"

const TableBodyCell: React.FC<PseudoBoxProps> = ({ children, ...props }) => {
  const { colorMode } = useColorMode()

  const color = useMemo(() => (colorMode === "dark" ? "gray.300" : "gray.600"), [colorMode])

  return (
    <PseudoBox
      as="td"
      fontSize="md"
      py="3"
      borderTopWidth="1px"
      {...sharedCellProps}
      {...props}
    >
      <Text color={color}>{children}</Text>
    </PseudoBox>
  )
}

export default TableBodyCell
