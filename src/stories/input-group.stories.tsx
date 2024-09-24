import { ComponentProps } from 'react';
import { Meta, StoryObj } from '@storybook/react';

import InputGroup from '../components/ui/input-group.tsx';
import { fn } from '@storybook/test';

type StoryProps = ComponentProps<typeof InputGroup>;

const meta: Meta<StoryProps> = {
	tags: ["autodocs"],
	component: InputGroup,
	argTypes: {
		id: {
            description: "Unique identifier",
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
            description: "Defines the size of the component.",
            options: ["small", "medium", "large"],
			control: {
				type: "select"
			}
		},
		labelText: {
            description: "The text displayed as a label.",
            control: {
				type: "text"
			}
		},
		error: {
            description: "Indicates whether the input is in an error state.",
            control: {
				type: "boolean"
			}
		},
        required: {
            description: "Specifies whether the input field is mandatory.",
            control: {
                type: "boolean"
            }
        },
		disabled: {
            description: "Controls the quiet mode.",
            control: {
				type: "boolean"
			}
		},
		annotationText: {
            description: "Provides text for the user.",
            control: {
				type: "text"
			}
		},
		quiet: {
            description: "Controls the quiet mode.",
            control: {
				type: "boolean"
			}
		}
	},
	args: {
		onChange: fn()
	}
}

export default meta;

export const Small: StoryObj<StoryProps> = {
	args: {
		id: "#input",
		placeholder: "Input...",
		size: "small",
		labelText: "Email",
		error: false,
		disabled: false,
		quiet: false,
		annotationText: undefined
	}
}

export const Medium: StoryObj<StoryProps> = {
	args: {
		id: "#input",
		placeholder: "Input...",
		size: "medium",
		labelText: "Email"
	}
}

export const Large: StoryObj<StoryProps> = {
	args: {
		id: "#input",
		placeholder: "Input...",
		size: "large",
		labelText: "Email"
	}
}

export const WithAnnotation: StoryObj<StoryProps> = {
	args: {
		id: "#input",
		placeholder: "Input...",
		size: "medium",
		labelText: "Email",
		disabled: false,
		annotationText: "This is a hint text to help user."
	}
}

export const Disabled: StoryObj<StoryProps> = {
	args: {
		id: "#input",
		placeholder: "Input...",
		labelText: "Email",
		disabled: true
	}
}

export const DisabledWithAnnotation: StoryObj<StoryProps> = {
	args: {
		id: "#input",
		placeholder: "Input...",
		labelText: "Email",
		disabled: true,
		annotationText: "This is a hint text to help user."
	}
}

export const Error: StoryObj<StoryProps> = {
	args: {
		id: "#input",
		placeholder: "Input...",
		labelText: "Email",
		error: true
	}
}

export const ErrorWithAnnotation: StoryObj<StoryProps> = {
	args: {
		id: "#input",
		placeholder: "Input...",
		labelText: "Email",
		error: true,
		annotationText: "This is a hint text to help user."
	}
}

export const Quiet: StoryObj<StoryProps> = {
	args: {
		id: "#input",
		placeholder: "Input...",
		labelText: "Email",
		quiet: true
	}
}