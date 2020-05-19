import { Box, BoxProps, useColorMode } from "@chakra-ui/core"
import React, { useMemo } from "react"

type Props = BoxProps

const Card: React.FC<Props> = (props) => {
  const { colorMode } = useColorMode()

  const bg = useMemo(() => (colorMode === "dark" ? "gray.700" : "white"), [colorMode])

  return <Box bg={bg} borderRadius={4} borderWidth={1} {...props} />
}

export default Card
