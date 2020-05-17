import {
  Button as ChakraButton,
  ButtonProps as ChakraButtonProps,
  useTheme,
} from "@chakra-ui/core"
import React from "react"
import { ButtonVariants } from "../../styles/types"

interface ButtonProps extends ChakraButtonProps {
  themeVariant?: ButtonVariants
}

const Button: React.FC<ButtonProps> = ({ themeVariant = "primary", children, ...rest }) => {
  const theme = useTheme()

  return (
    <ChakraButton
      {...theme.buttons.variants[themeVariant || "primary"]}
      type="submit"
      {...rest}
    >
      {children}
    </ChakraButton>
  )
}

export default Button
