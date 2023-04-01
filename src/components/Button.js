import React, { forwardRef, useMemo } from "react";
import { isNil } from "remeda";
import { collapse } from "@growthops/ext-ts";

const baseClasses =
  "rounded text-[15px] leading-6 font-medium font-poppins text-center transition-all ease-in-out";

const variantClasses = {
  primary: "bg-primary-gold text-white",
  secondary: "bg-accent-red-600 text-white",
  tertiary:
    "border border-solid border-[2px] border-primary-gold text-primary-gold text-[18px]",
};

const sizeClasses = {
  large: "px-[10px] py-[11px] space-x-9",
  regular: "px-[10px] py-[8px]  space-x-9",
  small: "px-[22px] py-2  space-x-2",
};

const iconClasses = {
  large: "w-7",
  regular: "w-5",
  small: "w-4",
};

const generateIcon = (icon, alignment, classes, alignmentAdjustmentClasses) => {
  if (!isNil(icon) && (icon.alignment ?? "left") === alignment) {
    const IconSvg = icon.svg;
    return (
      <IconSvg className={collapse([classes, alignmentAdjustmentClasses])} />
    );
  }
};

const useClasses = (variant, size, className, icon) =>
  useMemo(
    () => ({
      root: collapse([
        baseClasses,
        variantClasses[variant],
        sizeClasses[size],
        className ?? "",
      ]),
      icon: collapse([iconClasses[size], icon?.className ?? ""]),
    }),
    [variant, size, className, icon?.className]
  );

const useIcons = (icon, classes) =>
  useMemo(
    () => ({
      left: generateIcon(icon, "left", classes, "-ml-2"), // -ml-* here to visually weight the icon appropriately.
      right: generateIcon(icon, "right", classes, "!-mr-2"), // !-mr-* here to visually weight the icon appropriately.
    }),
    [icon, classes]
  );

const Semantic = ({
  label,
  variant = "primary",
  size = "regular",
  className,
  icon,
  type = "button",
}) => {
  const classes = useClasses(variant, size, className, icon);
  const icons = useIcons(icon, classes.icon);

  return (
    <button className={classes.root} type={type}>
      {icons.left}
      <span>{label}</span>
      {icons.right}
    </button>
  );
};

const Link = forwardRef(
  (
    {
      label,
      variant = "primary",
      size = "regular",
      className,
      icon,
      ...intrinsicAnchorProps
    },
    ref
  ) => {
    const classes = useClasses(variant, size, className, icon);
    const icons = useIcons(icon, classes.icon);

    return (
      <a
        ref={ref}
        className={classes.root}
        {...intrinsicAnchorProps}
        rel="noreferrer"
      >
        {icons.left}
        <span>{label}</span>
        {icons.right}
      </a>
    );
  }
);

const Button = {
  Semantic,
  Link,
};

export default Button;
