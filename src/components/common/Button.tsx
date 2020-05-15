import React from "react"
import { Button as ChakraButton, ButtonProps as ChakraButtonProps } from "@chakra-ui/core"
import theme, { ButtonVariants } from "../../theme"

interface ButtonProps extends ChakraButtonProps {
  themeVariant?: ButtonVariants
}

const Button: React.FunctionComponent<ButtonProps> = ({
  themeVariant = "primary",
  children,
  ...rest
}) => {
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
