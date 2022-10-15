import { Meta, StoryObj } from "@storybook/react";
import { Button, ButtonProps } from ".";

export default {
  args: {
    children: "Button",
  },
  component: Button,
  title: "Components/Button",
} as Meta<ButtonProps>;

export const Default: StoryObj<ButtonProps> = {};
