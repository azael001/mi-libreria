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
    height: '100px', 
    width: '200px',  
    disabled: false,
  },
};

export const Secondary: Story = {
  args: {
    text: "Limpiar",
    txtcolor: 'blue',
    bgcolor: 'pink',
    height: '100px', 
    width: '200px',  
    disabled: false,
  },
};