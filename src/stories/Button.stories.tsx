import Button, { BtnProps } from "../components/Button";
import { Story, Meta } from "@storybook/react";

export default {
	title: "Button",
	component: Button,
	argTypes: { handleClick: { action: "handleClick" } },
} as Meta;

const Template: Story = (args: any) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
	backgroundColor: "red",
	label: "Press Me ",
	color: "white",
	border: "none",
	size: "md",
    
};

export const Outlined = () => (
	<Button
		backgroundColor='transparent'
		label='Press Me '
		color='black'
		border='1px solid #ebecec'
		size='lg'
        
	/>
);

export const OutlinedRounded = () => (
	<Button
		backgroundColor='transparent'
		label='Press Me'
		color='black'
		border='1px solid #ebecec'
		size='md'
		borderRadius='20px'
	/>
);
