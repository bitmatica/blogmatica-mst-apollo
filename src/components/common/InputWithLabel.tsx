import React from "react";
import { FormLabel, Input, InputProps, StackProps } from "@chakra-ui/core";
import InlineStack from "./InlineStack";

interface InputWithLabelProps extends StackProps {
  name: string;
  label: string;
  type: string;
  value?: string | number;
  labelWidth?: string;
  inputProps?: InputProps;
  isRequired?: boolean;
  placeHolder?: string;
  handleUpdate(event: React.FormEvent<HTMLInputElement>): void;
}

const InputWithLabel: React.FunctionComponent<InputWithLabelProps> = ({
  name,
  label,
  type,
  value,
  labelWidth,
  inputProps,
  isRequired,
  placeHolder,
  handleUpdate,
  ...rest
}) => {
  return (
    <InlineStack my={8} {...rest}>
      <FormLabel width={labelWidth || 120} htmlFor={name}>
        {label}
      </FormLabel>
      <Input
        name={name}
        autoComplete={type}
        display="inline-block"
        type={type}
        value={value}
        isRequired={isRequired}
        placeholder={placeHolder}
        onChange={handleUpdate}
        {...inputProps}
      />
    </InlineStack>
  );
};

export default InputWithLabel;
