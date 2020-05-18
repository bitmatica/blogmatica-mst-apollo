import { FormControl, FormControlProps } from "@chakra-ui/core"
import React from "react"

const Form: React.FC<FormControlProps> = ({ children, onSubmit, ...rest }) => {
  return (
    <form onSubmit={onSubmit}>
      <FormControl {...rest}>{children}</FormControl>
    </form>
  )
}

export default Form
