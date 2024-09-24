import React from 'react';
import clsx from 'clsx';

interface LabelProps {
	id: string,
	size?: "small" | "medium" | "large",
	disabled?: boolean,
	children: React.ReactNode;
}

const InputLabel = ({ id, size = "medium", disabled = false, children }: LabelProps) => {
	const sizeStyles: Record<NonNullable<LabelProps["size"]>, string> = {
		small: "text-xs",
		medium: "text-sm",
		large: "text-base"
	};

	const disabledStyles = "text-gray-500 font-normal";

	return <label htmlFor={ id } className={ clsx("font-medium", sizeStyles[size], disabled && disabledStyles) }>{ children }</label>;
};

export default InputLabel;