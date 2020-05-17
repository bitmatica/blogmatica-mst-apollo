import { IconButton, useColorMode } from "@chakra-ui/core"
import { ButtonProps } from "@chakra-ui/core/dist/Button"
import React from "react"

export type ColorModeSwitcherProps = Omit<ButtonProps, "children">

const ColorModeSwitcher: React.FC<ColorModeSwitcherProps> = (props) => {
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
      _hover={{}}
      {...props}
    />
  )
}

export default ColorModeSwitcher
