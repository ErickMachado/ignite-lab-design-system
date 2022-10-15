import { ReactNode, HTMLAttributes } from "react";
import { Slot } from "@radix-ui/react-slot";
import { clsx } from "clsx";

export interface TextProps extends HTMLAttributes<Element> {
  asChild?: boolean;
  children: ReactNode;
  size?: "sm" | "md" | "lg";
}

export function Text({
  asChild,
  children,
  className,
  size = "md",
  ...rest
}: TextProps) {
  const Component = asChild ? Slot : "span";

  return (
    <Component
      className={clsx(`text-gray-100 ${className}`, {
        "text-xs": size === "sm",
        "text-sm": size === "md",
        "text-md": size === "lg",
      })}
      {...rest}
    >
      {children}
    </Component>
  );
}
