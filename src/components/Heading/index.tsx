import { ReactNode } from "react";
import { Slot } from "@radix-ui/react-slot";
import { clsx } from "clsx";

export interface HeadingProps {
  asChild?: boolean;
  children: ReactNode;
  size?: "lg" | "xl" | "2xl";
}

export function Heading({ asChild, children, size = "lg" }: HeadingProps) {
  const Component = asChild ? Slot : "h2";

  return (
    <Component
      className={clsx("text-gray-100 font-bold", {
        "text-lg": size === "lg",
        "text-xl": size === "xl",
        "text-2xl": size === "2xl",
      })}
    >
      {children}
    </Component>
  );
}
