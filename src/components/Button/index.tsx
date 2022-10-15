import { ReactNode, ButtonHTMLAttributes } from "react";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
}

export function Button({ children, ...rest }: ButtonProps) {
  return (
    <button
      className="py-3 px-4 font-semibold rounded bg-cyan-500 text-sm hover:bg-cyan-300 focus:ring-2 ring-white transition-all"
      {...rest}
    >
      {children}
    </button>
  );
}
