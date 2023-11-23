import React from "react";

type BtnProps = {
	label: string;
	onClick?: () => void;
	backgroundColor: string;
	color: string;
	border: string;
	size: "sm" | "md" | "lg";
	borderRadius?: string;
};

const Button: React.FC<BtnProps> = ({
	label,
	onClick,
	backgroundColor,
	color,
	border,
	size,
	borderRadius,
}) => {
	let scale = 0.9;
	if (size === "sm") scale = 0.9;
	if (size === "md") scale = 1.1;
	if (size === "lg") scale = 1.3;
	const styles = {
		backgroundColor,
		padding: "10px",
		borderRadius,
		color,
		outline: "none",
		border,
		transform: `scale(${scale})`,
		fontSize: "12px",
	};

	return (
		<button style={styles} onClick={onClick}>
			{label}
		</button>
	);
};

export default Button;
