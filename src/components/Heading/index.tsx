import { ReactNode, HTMLAttributes } from "react";
import { Slot } from "@radix-ui/react-slot";
import { clsx } from "clsx";

export interface HeadingProps extends HTMLAttributes<Element> {
  asChild?: boolean;
  children: ReactNode;
  size?: "lg" | "xl" | "2xl";
}

export function Heading({
  asChild,
  children,
  className,
  size = "lg",
  ...rest
}: HeadingProps) {
  const Component = asChild ? Slot : "h2";

  return (
    <Component
      className={clsx(`text-gray-100 font-bold ${className}`, {
        "text-lg": size === "lg",
        "text-xl": size === "xl",
        "text-2xl": size === "2xl",
      })}
      {...rest}
    >
      {children}
    </Component>
  );
}
