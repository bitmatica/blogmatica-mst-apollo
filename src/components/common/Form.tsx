import React from "react"
import { FormControl, FormControlProps } from "@chakra-ui/core"

const Form: React.FunctionComponent<FormControlProps> = ({ children, onSubmit }) => {
  return (
    <form onSubmit={onSubmit}>
      <FormControl>{children}</FormControl>
    </form>
  )
}

export default Form
