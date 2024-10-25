import type { Meta, StoryObj } from "@storybook/react";
import Example from "./example"; //importamos el componente Example
const meta: Meta<typeof Example> = {
 title: "MyButton",
 component: Example,
};
export default meta;
type Story = StoryObj<typeof Example>;
export const Primary: Story = {
 args: {
 text: "Primer botón",
 txtcolor: 'white',
 bgcolor: 'red',
 bordercolor: 'black',
 borderwidth: '2px',
 hoverTxtcolor: 'black',
 hoverBgcolor: 'white',
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
        bordercolor: 'black',
        borderwidth: '2px',
        hoverTxtcolor: 'black',
        hoverBgcolor: 'white',
        disabled: false,
        size: "small",
        onClick: () => alert("Segundo botón"),
 },
};