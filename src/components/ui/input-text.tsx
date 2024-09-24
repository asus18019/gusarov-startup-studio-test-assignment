import clsx from 'clsx';

interface InputTextProps {
	id: string,
	value: string,
	placeholder: string,
	type?: "text" | "email" | "password",
	size?: "small" | "medium" | "large",
	onChange: (newValue: string) => void,
	required?: boolean,
	error?: boolean,
	disabled?: boolean,
	quiet?: boolean
}

const InputText = ({
	id,
	value,
	placeholder,
	type = "text",
	size = "medium",
	onChange,
	required = false,
	error = false,
	disabled = false,
	quiet = false
}: InputTextProps) => {
	const sizeStyles: Record<NonNullable<InputTextProps["size"]>, string> = {
		small: "p-[6px] text-xs",
		medium: "p-[8px] text-sm",
		large: "p-[12px] text-base"
	};

	const errorStyles = "border-[#FDA29B] focus:border-[#FDA29B] focus:ring focus:ring-[#F044383D]";
	const disabledStyles = "text-gray-300 bg-white placeholder-gray-300";
	const quietStyles = "border-transparent";

	return (
		<input
			id={ id }
			value={ value }
			placeholder={ placeholder }
			onChange={ (e) => onChange(e.target.value) }
			type={ type }
			disabled={ disabled }
			required={ required }
			className={ clsx(
				"min-w-16 border-[1px] border-[#D1D1D6] rounded outline-none focus:border-[#84CAFF] focus:ring focus:ring-[#2E90FA3D]",
				sizeStyles[size],
				error && errorStyles,
				disabled && disabledStyles,
				quiet && quietStyles
			) }
		/>
	);
};

export default InputText;