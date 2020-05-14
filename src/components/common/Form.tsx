import React from "react";
import { FormControl, FormControlProps } from "@chakra-ui/core";

const Form: React.FunctionComponent<FormControlProps> = ({
  children,
  onSubmit,
  ...rest
}) => {
  return (
    <form
      onSubmit={onSubmit}
    >
      <FormControl {...rest}>
        {children}
      </FormControl>
    </form>
  );
};

export default Form;
