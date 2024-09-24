import InputLabel from './input-label.tsx';
import InputText from './input-text.tsx';
import InputAnnotation from './input-annotation.tsx';

interface InputGroupProps {
	id: string,
	value: string,
	placeholder: string,
	labelText: string,
	type?: "text" | "email" | "password",
	size?: "small" | "medium" | "large",
	onChange: (newValue: string) => void,
	required?: boolean,
	error?: boolean,
	disabled?: boolean,
	annotationText?: string,
	quiet?:boolean
}

const InputGroup = ({
	id,
	value,
	placeholder,
	labelText,
	type = "text",
	size = "medium",
	onChange,
	required = false,
	error = false,
	disabled = false,
	annotationText,
	quiet = false
}: InputGroupProps) => {
	return (
		<div className="grid gap-1 w-max">
			<InputLabel id={ id } size={ size } disabled={ disabled }>{ labelText }</InputLabel>
			<InputText
				id={ id }
				value={ value }
				onChange={ onChange }
				placeholder={ placeholder }
				type={ type } size={ size }
				required={ required }
				error={ error }
				disabled={ disabled }
				quiet={ quiet }
			/>
			{ annotationText && (
				<InputAnnotation size={ size } error={ error } disabled={ disabled }> { annotationText }</InputAnnotation>
			) }
		</div>
	);
};

export default InputGroup;