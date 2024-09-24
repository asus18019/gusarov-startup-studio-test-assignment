import { ComponentProps } from 'react';
import { Meta, StoryObj } from '@storybook/react';

import InputLabel from '../components/ui/input-label.tsx';

type StoryProps = ComponentProps<typeof InputLabel>;

const meta: Meta<StoryProps & { labelText: string }> = {
	tags: ["autodocs"],
	component: InputLabel,
	argTypes: {
		id: {
			control: {
				type: "text"
			}
		},
		size: {
			options: ["small", "medium", "large"],
			control: {
				type: "select"
			}
		},
		disabled: {
			control: {
				type: "boolean"
			}
		}
	},
	args: {
		labelText: "Email"
	}
}

export default meta;

export const Small: StoryObj<StoryProps> = {
	args: {
		size: "small",
		disabled: false
	},
	//@ts-ignore
	render: ({ labelText, ...args }) => <InputLabel { ...args }>{ labelText }</InputLabel>
}

export const Medium: StoryObj<StoryProps> = {
	args: {
		size: "medium"
	},
	//@ts-ignore
	render: ({ labelText, ...args }) => <InputLabel { ...args }>{ labelText }</InputLabel>
}

export const Large: StoryObj<StoryProps> = {
	args: {
		size: "large"
	},
	//@ts-ignore
	render: ({ labelText, ...args }) => <InputLabel { ...args }>{ labelText }</InputLabel>
}

export const Disabled: StoryObj<StoryProps> = {
	args: {
		size: "medium",
		disabled: true
	},
	//@ts-ignore
	render: ({ labelText, ...args }) => <InputLabel { ...args }>{ labelText }</InputLabel>
}