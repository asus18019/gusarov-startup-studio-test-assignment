import { ComponentProps } from 'react';
import { Meta, StoryObj } from '@storybook/react';

import InputAnnotation from '../components/ui/input-annotation.tsx';

type StoryProps = ComponentProps<typeof InputAnnotation>;

const meta: Meta<StoryProps & { annotationText: string }> = {
	tags: ["autodocs"],
	component: InputAnnotation,
	argTypes: {
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
	},
	args: {
		annotationText: "This is a hint text to help user."
	}
}

export default meta;

export const Small: StoryObj<StoryProps> = {
	args: {
		size: "small",
		disabled: false,
		error: false
	},
	//@ts-ignore
	render: ({ annotationText, ...args }) => <InputAnnotation { ...args }>{ annotationText }</InputAnnotation>
}

export const Medium: StoryObj<StoryProps> = {
	args: {
		size: "medium"
	},
	//@ts-ignore
	render: ({ annotationText, ...args }) => <InputAnnotation { ...args }>{ annotationText }</InputAnnotation>
}

export const Large: StoryObj<StoryProps> = {
	args: {
		size: "large"
	},
	//@ts-ignore
	render: ({ annotationText, ...args }) => <InputAnnotation { ...args }>{ annotationText }</InputAnnotation>
}

export const WithError: StoryObj<StoryProps> = {
	args: {
		size: "medium",
		error: true
	},
	//@ts-ignore
	render: ({ annotationText, ...args }) => <InputAnnotation { ...args }>{ annotationText }</InputAnnotation>
}

export const Disabled: StoryObj<StoryProps> = {
	args: {
		size: "medium",
		disabled: true
	},
	//@ts-ignore
	render: ({ annotationText, ...args }) => <InputAnnotation { ...args }>{ annotationText }</InputAnnotation>
}