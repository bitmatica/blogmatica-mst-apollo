import React, { FormEvent } from "react";
import FormInputs from "./FormInputs";

interface RegisterUserFormProps {
  inputs: { [key: string]: string | number };
  errorMessage?: string;
  handleSubmit(): void;
  handleUpdate(event: React.FormEvent<HTMLInputElement>): void;
}

const RegisterUserForm: React.FunctionComponent<RegisterUserFormProps> = ({
  inputs,
  errorMessage,
  handleSubmit,
  handleUpdate,
}) => {
  return (
    <form
      onSubmit={(event: FormEvent): void => {
        if (event) {
          event.preventDefault();
        }
        handleSubmit();
      }}>
      Register User Form
      <FormInputs values={inputs} handleChange={handleUpdate} />
      <input type="submit" value="Submit" />
      <div>{errorMessage}</div>
    </form>
  );
};

export default RegisterUserForm;
