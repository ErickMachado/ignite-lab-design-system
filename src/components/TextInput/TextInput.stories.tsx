import { Meta, StoryObj } from "@storybook/react";
import { EnvelopeSimple } from "phosphor-react";
import { TextInput, TextInputFieldProps } from ".";

export default {
  component: TextInput.Root,
  args: {
    children: [
      <TextInput.Icon>
        <EnvelopeSimple size={24} className="text-gray-400" />
      </TextInput.Icon>,
      <TextInput.Field placeholder="Digite seu email" />,
    ],
  },
  title: "Components/TextInput",
} as Meta<TextInputFieldProps>;

export const Default: StoryObj<TextInputFieldProps> = {
  argTypes: {
    children: {
      table: {
        disable: true,
      },
    },
  },
};
export const WithoutIcon: StoryObj<TextInputFieldProps> = {
  args: {
    children: [<TextInput.Field placeholder="Digite seu email" />],
  },
  argTypes: {
    children: {
      table: {
        disable: true,
      },
    },
  },
};
