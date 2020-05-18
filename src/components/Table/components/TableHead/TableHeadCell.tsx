import { PseudoBox, PseudoBoxProps, Text, useColorMode } from "@chakra-ui/core"
import React, { useMemo } from "react"
import { sharedCellProps } from "../sharedStyles"

const TableHeadCell: React.FC<PseudoBoxProps> = ({ children, ...props }) => {
  const { colorMode } = useColorMode()
  const color = useMemo(() => (colorMode === "dark" ? "gray.400" : "gray.500"), [colorMode])

  return (
    <PseudoBox
      as="th"
      textTransform="uppercase"
      fontSize="sm"
      color="gray.500"
      {...sharedCellProps}
      {...props}
    >
      <Text color={color}>{children}</Text>
    </PseudoBox>
  )
}

export default TableHeadCell
