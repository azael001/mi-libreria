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
    text: "Enviar",
    txtcolor: 'white',
    bgcolor: 'black',
    bordercolor: 'black',
    borderwidth: '4px',
    hoverTxtcolor: 'black',
    hoverBgcolor: 'white',
    disabled: false,
    size: "small",
    onClick: () => alert("Se ha enviado correctamente"),
    },
   };
   export const Secondary: Story = {
       args: {
           text: "Limpiar",
           txtcolor: 'blue',
           bgcolor: 'pink',
           bordercolor: 'black',
           borderwidth: '4px',
           hoverTxtcolor: 'pink',
           hoverBgcolor: 'blue',
           disabled: false,
           size: "small",
           onClick: () => alert("Se ha limpiado correctamente"),
    },
   };