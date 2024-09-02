import { ComponentPropsWithoutRef } from "react";

export interface ButtonProps extends ComponentPropsWithoutRef<"button"> {
  variant: "primary";
}

export const Button = ({
  className,
  children,
  variant,
  ...props
}: ButtonProps) => {
  return (
    <button className={className} data-variant={variant} {...props}>
      {children}
    </button>
  );
};
