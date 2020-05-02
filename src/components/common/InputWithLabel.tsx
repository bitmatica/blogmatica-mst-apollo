import React from "react";
import { FormLabel, Input, InputProps } from "@chakra-ui/core";
import InlineStack from "./InlineStack";

interface InputWithLabelProps {
  label: string;
  labelWidth?: string;
}

const InputWithLabel: React.FunctionComponent<InputWithLabelProps & InputProps> = ({
  name,
  label,
  labelWidth,
  ...rest
}) => {
  return (
    <InlineStack my={8}>
      <FormLabel width={labelWidth || 120} htmlFor={name}>
        {label}
      </FormLabel>
      <Input name={name} display="inline-block" {...rest} />
    </InlineStack>
  );
};

export default InputWithLabel;
