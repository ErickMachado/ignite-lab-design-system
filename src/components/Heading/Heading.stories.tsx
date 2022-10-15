import { Meta, StoryObj } from "@storybook/react";
import { Heading, HeadingProps } from ".";

export default {
  args: {
    children: "Heading",
    size: "lg",
  },
  argTypes: {
    size: {
      control: {
        type: "inline-radio",
      },
      options: ["lg", "xl", "2xl"],
    },
  },
  component: Heading,
  title: "Components/Heading",
} as Meta<HeadingProps>;

export const Default: StoryObj<HeadingProps> = {};
export const ExtraLarge: StoryObj<HeadingProps> = {
  args: {
    size: "xl",
  },
};
export const TwoTimesExtraLarge: StoryObj<HeadingProps> = {
  args: {
    size: "2xl",
  },
};
export const WithSlot: StoryObj<HeadingProps> = {
  args: {
    asChild: true,
    children: <h1>Heading</h1>,
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
