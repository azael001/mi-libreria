import type { Meta, StoryObj } from "@storybook/react";
import Example from "./example"; 
const meta: Meta<typeof Example> = {
 title: "ComponentPACP",
 component: Example,
};
export default meta;
type Story = StoryObj<typeof Example>;
export const Primary: Story = {
 args: {
 text: "Primer botón",
 txtcolor: 'white',
 bgcolor: 'red',
 disabled: false,
 size: "large",
 onClick: () => alert("Primer botón"),
 },
};
export const Secondary: Story = {
    args: {
        text: "Segundo botón",
        txtcolor: 'black',
        bgcolor: 'green',
        disabled: false,
        size: "small",
        onClick: () => alert("Segundo botón"),
 },
};