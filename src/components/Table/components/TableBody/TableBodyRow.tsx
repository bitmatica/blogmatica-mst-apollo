import styled from "@emotion/styled"
import React from "react"

const Wrapper = styled("tr")`
  &:nth-of-type(odd) {
    background-color: ${({ theme }: any) => theme.colors.blackAlpha[50]};
  }
`

const TableBodyRow: React.FC = ({ children }) => <Wrapper>{children}</Wrapper>

export default TableBodyRow
