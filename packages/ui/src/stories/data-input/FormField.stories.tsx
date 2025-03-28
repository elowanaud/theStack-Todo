import type { Meta, StoryObj } from "@storybook/react";
import { Checkbox } from "../../components/Checkbox.tsx";
import { FormField } from "../../components/FormField.tsx";
import { Input } from "../../components/Input.tsx";
import { Password } from "../../components/Password.tsx";
import { Radio } from "../../components/Radio.tsx";

const meta = {
	title: "Data Input/FormField",
	component: FormField,
	argTypes: {
		label: {
			control: {
				type: "text",
			},
			type: "string",
		},
		children: {
			control: {
				type: "select",
			},
			table: {
				type: {
					summary: "ReactNode",
				},
			},
			options: ["Input", "Password", "Radio", "Checkbox"],
			mapping: {
				Input: <Input />,
				Password: <Password />,
				Radio: (
					<Radio.Group>
						<Radio name="radio" value={1}>
							Option 1
						</Radio>
						<Radio name="radio" value={2}>
							Option 2
						</Radio>
					</Radio.Group>
				),
				Checkbox: (
					<Checkbox.Group>
						<Checkbox name="checkbox" value={1}>
							Option 1
						</Checkbox>
						<Checkbox name="checkbox" value={2}>
							Option 2
						</Checkbox>
					</Checkbox.Group>
				),
			},
		},
		hint: {
			control: {
				type: "text",
			},
			type: "string",
		},
		error: {
			control: {
				type: "text",
			},
			type: "string",
		},
		className: {
			if: { arg: "hidden" },
		},
		errorOptions: {
			if: { arg: "hidden" },
		},
		hintOptions: {
			if: { arg: "hidden" },
		},
		labelOptions: {
			if: { arg: "hidden" },
		},
	},
	args: {
		label: "Email",
		hint: "Enter your email",
		error: "Must be a valid email",
		children: "Input",
	},
} satisfies Meta<typeof FormField>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Sandbox: Story = {};

export const WithInput: Story = {
	args: {
		label: "Email",
		hint: "Enter your email",
		error: "This is an error",
		children: (
			<Input type="email" placeholder="Enter your email" required={true} />
		),
	},
};

export const WithPassword: Story = {
	args: {
		label: "Password",
		hint: "Must be at least 8 characters",
		error: "This is an error",
		children: <Password required={true} />,
	},
};

export const WithRadio: Story = {
	args: {
		label: "Gender",
		hint: "Select your gender",
		error: "This is an error",
		children: (
			<Radio.Group>
				<Radio name="gender" value={1}>
					Male
				</Radio>
				<Radio name="gender" value={2}>
					Female
				</Radio>
			</Radio.Group>
		),
	},
};

export const WithCheckbox: Story = {
	args: {
		label: "Options",
		hint: "Select your options",
		error: "This is an error",
		children: (
			<Checkbox.Group>
				<Checkbox name="option" value={1}>
					Option 1
				</Checkbox>
				<Checkbox name="option" value={2}>
					Option 2
				</Checkbox>
			</Checkbox.Group>
		),
	},
};
