import React from "react";
import { collapse } from "@growthops/ext-ts";

const Heading = ({ variant, label, element = "p", className = "" }) => {
  const sharedProps = {
    className: collapse([variant, className]),
  };

  switch (element) {
    case "h1":
      return <h1 {...sharedProps}>{label}</h1>;
    case "h2":
      return <h2 {...sharedProps}>{label}</h2>;
    case "h3":
      return <h3 {...sharedProps}>{label}</h3>;
    case "h4":
      return <h4 {...sharedProps}>{label}</h4>;
    case "h5":
      return <h5 {...sharedProps}>{label}</h5>;
    case "h6":
      return <h6 {...sharedProps}>{label}</h6>;
    case "p":
      return <p {...sharedProps}>{label}</p>;
    case "span":
      return <span {...sharedProps}>{label}</span>;
    default:
      throw new Error("Unhandled");
  }
};

export default Heading;

export const Variant = [
  "heading-one",
  "heading-two",
  "heading-three",
  "heading-four",
  "heading-five",
  "heading-six",
  "subheading",
  "highlighted",
  "section-heading",
  "banner-heading",
  "coming-soon-heading",
];

export const SemanticElement = [
  "h1",
  "h2",
  "h3",
  "h4",
  "h5",
  "h6",
  "p",
  "span",
];

export const HeadingProps = {
  variant: Variant[0],
  label: "",
  element: SemanticElement[0],
  className: "",
};
