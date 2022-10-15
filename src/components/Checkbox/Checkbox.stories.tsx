import { Meta, StoryObj } from "@storybook/react";
import { Checkbox } from ".";
import { Text } from "../Text";

export default {
  component: Checkbox,
  decorators: [
    (Story) => (
      <div className="flex items-center gap-2">
        {Story()}
        <Text size="sm">Lembrar de mim por 30 dias</Text>
      </div>
    ),
  ],
  title: "Components/Checkbox",
} as Meta;

export const Default: StoryObj = {};
