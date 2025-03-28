import type { Meta, StoryObj } from "@storybook/react";
import { Input } from "../../components/Input.tsx";

const meta = {
	title: "Data Input/Input",
	component: Input,
	argTypes: {
		type: {
			name: "Type",
			description: "The type of the input",
			control: {
				type: "select",
			},
			options: ["text", "email", "number", "url"],
			type: "string",
		},
		value: {
			control: {
				type: "text",
			},
			type: "string",
		},
		placeholder: {
			control: {
				type: "text",
			},
			type: "string",
		},
		disabled: {
			control: {
				type: "boolean",
			},
			type: "boolean",
		},
		"aria-invalid": {
			control: {
				type: "boolean",
			},
		},
		ref: {
			if: { arg: "hidden" },
		},
	},
	args: {
		type: "text",
		value: "Hello World",
		placeholder: "",
		disabled: false,
		"aria-invalid": false,
	},
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Sandbox: Story = {};

export const States: Story = {
	render: () => (
		<div className="grid gap-1">
			<Input />
			<Input placeholder="Hello World" />
			<Input value="Hello World" />
			<Input aria-invalid={true} />
			<Input disabled={true} />
			<Input placeholder="Hello World" disabled={true} />
			<Input disabled={true} value="Hello World" />
		</div>
	),
};
