import { ComponentProps } from 'react';
import { fn } from '@storybook/test'
import { Meta, StoryObj } from '@storybook/react';

import InputText from '../components/ui/input-text.tsx';

type StoryProps = ComponentProps<typeof InputText>;

const meta: Meta<StoryProps> = {
	tags: ["autodocs"],
	component: InputText,
	argTypes: {
		id: {
            description: "Unique identifier.",
			control: {
				type: "text"
			}
		},
		value: {
            description: "The current value of the input field",
			control: {
				type: "text"
			}
		},
		placeholder: {
            description: "Text displayed when the input field is empty.",
			control: {
				type: "text"
			}
		},
		type: {
            description: "Defines the type of the input",
			options: ["text", "email", "password"],
			control: {
				type: "select"
			}
		},
		size: {
            description: "Specifies the size of the input field",
			options: ["small", "medium", "large"],
			control: {
				type: "select"
			}
		},
		error: {
            description: "Indicates whether the input is in an error state.",
			control: {
				type: "boolean"
			}
		},
		disabled: {
            description: "Disables the input field when set to true",
			control: {
				type: "boolean"
			}
		},
		quiet: {
            description: "Controls the quiet mode",
			control: {
				type: "boolean"
			}
		},
	},
	args: {
		onChange: fn()
	}
}

export default meta;

export const Small: StoryObj<StoryProps> = {
	args: {
		placeholder: "Input...",
		size: "small",
		error: false,
		disabled: false,
		quiet: false,
		required: false
	},
}

export const Medium: StoryObj<StoryProps> = {
	args: {
		placeholder: "Input...",
		size: "medium",
		error: false,
		disabled: false,
	}
}

export const Large: StoryObj<StoryProps> = {
	args: {
		placeholder: "Input...",
		size: "large",
		error: false,
		disabled: false,
	},
}

export const Disabled: StoryObj<StoryProps> = {
	args: {
		value: "Hello world!",
		placeholder: "Input...",
		size: "medium",
		error: false,
		disabled: true,
	},
}

export const Quiet: StoryObj<StoryProps> = {
	args: {
		placeholder: "Input...",
		size: "medium",
		error: false,
		disabled: false,
		quiet: true
	},
}


export const WithError: StoryObj<StoryProps> = {
	args: {
		placeholder: "Input...",
		size: "medium",
		error: true,
		disabled: false,
	},
}