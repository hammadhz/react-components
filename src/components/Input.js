import React, { forwardRef } from "react";
import { collapse } from "@growthops/ext-ts";
import { FormField } from "./utility";

const Input = forwardRef(function Input(
  { className, label, error, helpText, name, ...intrinsicInputProps },
  ref
) {
  return (
    <FormField
      className={className}
      label={label}
      helpText={helpText}
      error={error}
      isRequired={intrinsicInputProps.required}
      isDisabled={intrinsicInputProps.disabled}
    >
      {(baseClasses) => (
        <input
          ref={ref}
          className={collapse(baseClasses)}
          {...intrinsicInputProps}
        />
      )}
    </FormField>
  );
});

export default Input;
