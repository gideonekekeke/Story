import Button from "../components/Button";

export default {
	title: "Button",
	component: Button,
};

export const Primary = () => (
	<Button
		backgroundColor='red'
		label='Press Me '
		color='white'
		border='none'
		size='md'
	/>
);

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
        borderRadius="20px"
	/>
);