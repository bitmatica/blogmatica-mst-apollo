import React from "react";
import capitalize from "lodash.capitalize";
import get from "lodash.get";

interface FormInputProps {
  values: { [key: string]: string | number };
  handleChange: (event: React.FormEvent<HTMLInputElement>) => void;
}

const SPECIAL_INPUTS = ["email", "password"];

const FormInputs: React.FunctionComponent<FormInputProps> = ({ values, handleChange }) => {
  return (
    <div>
      {Object.keys(values).map(
        (key): JSX.Element => {
          const type = SPECIAL_INPUTS.includes(key) ? key : "text";
          return (
            <label key={key}>
              {capitalize(key)}
              <input
                type={type}
                name={key}
                onChange={handleChange}
                value={get(values, [key])}
              />
            </label>
          );
        },
      )}
    </div>
  );
};
export default FormInputs;
