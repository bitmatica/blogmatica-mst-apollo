import { IconButton, useColorMode } from "@chakra-ui/core"
import React from "react"

const ColorModeSwitcher: React.FC = (props) => {
  const { colorMode, toggleColorMode } = useColorMode()
  return (
    <IconButton
      aria-label={`Switch to ${colorMode === "light" ? "dark" : "light"} mode`}
      variant="ghost"
      color="current"
      ml="2"
      fontSize="20px"
      onClick={toggleColorMode}
      icon={colorMode === "light" ? "moon" : "sun"}
      {...props}
    />
  )
}

export default ColorModeSwitcher
