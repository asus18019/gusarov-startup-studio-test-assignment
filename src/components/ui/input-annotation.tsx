import React from 'react';
import clsx from 'clsx';

interface LabelProps {
	size?: "small" | "medium" | "large",
	disabled?: boolean,
	error?: boolean,
	children: React.ReactNode;
}

const InputAnnotation = ({ size = "medium", disabled = false, error = false, children }: LabelProps) => {
	const sizeStyles: Record<NonNullable<LabelProps["size"]>, string> = {
		small: "text-xs",
		medium: "text-sm",
		large: "text-base"
	};

	const errorStyles = "!text-[#D92D20]";
	const disabledStyles = "!text-gray-300";

	return (
		<label
			className={ clsx("font-normal text-gray-500", sizeStyles[size], disabled && disabledStyles, error && errorStyles) }
		>
			{ children }
		</label>
	);
};

export default InputAnnotation;