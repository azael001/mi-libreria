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
    text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sapiente, nam.",
    txtcolor: 'black',
    bgcolor: 'white',
    height: '150px', 
    width: '300px', 
    icon:'favorite',
    iconColor:'blue',
  },
};

export const Secondary: Story = {
  args: {
    text: "  Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere possimus provident expedita neque incidunt? Voluptatem repellat voluptates ad delectus blanditiis sequi quisquam unde omnis, expedita et explicabo, harum perferendis quas.",
    txtcolor: 'black',
    bgcolor: 'pink',
    height: '200px', 
    width: '400px',
    icon:'favorite',
    iconColor:'yellow', 
  },
};