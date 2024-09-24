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
			control: {
				type: "text"
			}
		},
		value: {
			control: {
				type: "text"
			}
		},
		placeholder: {
			control: {
				type: "text"
			}
		},
		type: {
			options: ["text", "email", "password"],
			control: {
				type: "select"
			}
		},
		size: {
			options: ["small", "medium", "large"],
			control: {
				type: "select"
			}
		},
		error: {
			control: {
				type: "boolean"
			}
		},
		disabled: {
			control: {
				type: "boolean"
			}
		},
		quiet: {
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