import { PseudoBox, PseudoBoxProps } from "@chakra-ui/core"
import styled from "@emotion/styled"
import React from "react"

const Wrapper = styled("tr")`
  &:nth-of-type(odd) {
    background-color: ${({ theme }: any) => theme.colors.blackAlpha[50]};
  }
`

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
