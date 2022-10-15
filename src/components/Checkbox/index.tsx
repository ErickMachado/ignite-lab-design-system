import * as CheckboxPrimitive from "@radix-ui/react-checkbox";
import { Check } from "phosphor-react";
import { InputHTMLAttributes } from "react";

interface CheckboxProps extends InputHTMLAttributes<HTMLInputElement> {}

export function Checkbox({ id, ...rest }: CheckboxProps) {
  return (
    <CheckboxPrimitive.Root
      className="w-6 h-6 bg-gray-800 rounded flex items-center justify-center"
      id={id}
    >
      <CheckboxPrimitive.Indicator>
        <Check size={20} className="text-cyan-500" weight="bold" />
      </CheckboxPrimitive.Indicator>
    </CheckboxPrimitive.Root>
  );
}
