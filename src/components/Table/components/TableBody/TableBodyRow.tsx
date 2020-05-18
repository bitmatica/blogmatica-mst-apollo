import { PseudoBox, PseudoBoxProps } from "@chakra-ui/core"
import React from "react"

const TableBodyRow: React.FC<PseudoBoxProps> = ({ children, ...props }) => (
  <PseudoBox
    as="tr"
    _odd={{
      bg: "blackAlpha.50",
    }}
    {...props}
  >
    {children}
  </PseudoBox>
)

export default TableBodyRow
