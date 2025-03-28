import type { Meta, StoryObj } from "@storybook/react";
import { Password } from "../../components/Password.tsx";

const meta = {
	title: "Data Input/Password",
	component: Password,
	argTypes: {
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
		value: "",
		placeholder: "",
		disabled: false,
		"aria-invalid": false,
	},
} satisfies Meta<typeof Password>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Sandbox: Story = {};

export const States: Story = {
	render: () => (
		<div className="grid gap-1">
			<Password />
			<Password placeholder="Hello World" />
			<Password value="Hello World" />
			<Password aria-invalid={true} />
			<Password disabled={true} />
			<Password placeholder="Hello World" disabled={true} />
			<Password disabled={true} value="Hello World" />
		</div>
	),
};
