import { ReactNode, InputHTMLAttributes } from "react";

interface TextInputRoot {
  children: ReactNode;
}

function TextInputRoot({ children }: TextInputIcon) {
  return (
    <div className="bg-gray-800 rounded py-3 px-4 w-full focus-within:ring-2 ring-cyan-300 ring-0 h-[48px] flex items-center gap-2">
      {children}
    </div>
  );
}

TextInputRoot.displayName = "TextInput.Root";

interface TextInputIcon {
  children: ReactNode;
}

function TextInputIcon({ children }: TextInputIcon) {
  return <>{children}</>;
}

TextInputIcon.displayName = "TextInput.Icon";

export interface TextInputFieldProps
  extends InputHTMLAttributes<HTMLInputElement> {}

function TextInputField(props: TextInputFieldProps) {
  return (
    <input
      className="bg-transparent outline-none flex-1 text-gray-100 placeholder:text-gray-400"
      {...props}
    />
  );
}

TextInputField.displayName = "TextInput.Field";

export const TextInput = {
  Field: TextInputField,
  Icon: TextInputIcon,
  Root: TextInputRoot,
};
