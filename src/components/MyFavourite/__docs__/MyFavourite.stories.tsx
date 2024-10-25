import type { Meta, StoryObj } from "@storybook/react";
import Example from "./Example";

const meta: Meta<typeof Example> = {
  title: "MyFavourite",
  component: Example,
};
export default meta;

type Story = StoryObj<typeof Example>;

export const Primary: Story = {
  args: {
    bgcolor: "red",
    disabled: false,
    onClick: () => alert("Icono principal"),
  },
};

export const Secondary: Story = {
  args: {
    bgcolor: "blue",
    disabled: false,
    onClick: () => alert("Icono secundario"),
  },
};