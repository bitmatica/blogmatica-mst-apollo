import { Stack, StackProps } from "@chakra-ui/core"
import React from "react"

const InlineStack: React.FC<StackProps> = (props) => (
  <Stack
    {...{
      isInline: true,
      align: "center",
      ...props,
    }}
  />
)

export default InlineStack
