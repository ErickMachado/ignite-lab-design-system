import { Meta, StoryObj } from "@storybook/react";
import { Text, TextProps } from ".";

export default {
  args: {
    children: "Text",
    size: "md",
  },
  argTypes: {
    size: {
      control: {
        type: "inline-radio",
      },
      options: ["sm", "md", "lg"],
    },
  },
  component: Text,
  title: "Components/Text",
} as Meta<TextProps>;

export const Default: StoryObj<TextProps> = {};
export const Small: StoryObj<TextProps> = {
  args: {
    size: "sm",
  },
};
export const Large: StoryObj<TextProps> = {
  args: {
    size: "lg",
  },
};
export const WithSlot: StoryObj<TextProps> = {
  args: {
    asChild: true,
    children: <p>Text</p>,
  },
  argTypes: {
    asChild: {
      table: {
        disable: true,
      },
    },
    children: {
      table: {
        disable: true,
      },
    },
  },
};
