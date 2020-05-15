import React from "react"
import { Stack, StackProps } from "@chakra-ui/core"

const InlineStack: React.FunctionComponent<StackProps> = (props) => (
  <Stack
    {...{
      isInline: true,
      align: "center",
      ...props,
    }}
  />
)

export default InlineStack
