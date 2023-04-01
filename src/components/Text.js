import React from "react";
import { collapse } from "@growthops/ext-ts";

const Text = ({
  variant = "text-regular",
  children,
  element = "p",
  className = "",
}) => {
  const sharedProps = {
    className: collapse([variant, className]),
  };

  switch (element) {
    case "p":
      return <p {...sharedProps}>{children}</p>;
    case "span":
      return <span {...sharedProps}>{children}</span>;
    default:
      // Ensure exhaustive case handling.
      ((_) => {
        throw new Error("Unhandled");
      })(element);
  }
};

export default Text;
