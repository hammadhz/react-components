import React, { useMemo } from "react";
import { isNil } from "remeda";
import {
  InformationCircleIcon,
  ExclamationCircleIcon,
} from "@heroicons/react/solid";
import { collapse } from "@growthops/ext-ts";

const generateMetaText = (text, additionalClasses, Svg) =>
  !isNil(text) && (
    <div
      className={collapse([
        "flex mt-1 items-center space-x-1",
        additionalClasses,
      ])}
    >
      <Svg className="w-4" />
      <span className="block text-xs">{text}</span>
    </div>
  );

const baseClasses =
  "mt-1 border-b border-solid border-black/60 focus:outline-none font-poppins py-2 w-full text-base leading-6 text-black placeholder:text-black/87";

const getErrorClasses = (error) =>
  isNil(error) ? "border-true-gray-300" : "border-red-300";

const getDisabledClasses = (disabled) =>
  disabled ? "bg-gray-200 cursor-not-allowed" : "bg-transparent";

const FormField = ({
  className,
  label,
  isRequired,
  isDisabled,
  helpText,
  error,
  children,
}) => {
  const smartLabel = useMemo(
    () => `${label} ${isRequired ? "*" : ""}`.trim(),
    [label, isRequired]
  );

  const labelClasses = useMemo(
    () =>
      `block text-xs leading-3 font-poppins mb-1  ${
        isNil(error) ? "" : "text-red-500"
      }`,
    [error]
  );

  const fieldClasses = useMemo(
    () =>
      collapse([
        baseClasses,
        getErrorClasses(error),
        getDisabledClasses(isDisabled),
      ]),
    [error, isDisabled]
  );

  return (
    <div className={className}>
      <span className={labelClasses}>{smartLabel}</span>
      {children(fieldClasses)}
      {generateMetaText(helpText, "text-true-gray-500", InformationCircleIcon)}
      {generateMetaText(error, "text-red-500", ExclamationCircleIcon)}
    </div>
  );
};

export default FormField;
