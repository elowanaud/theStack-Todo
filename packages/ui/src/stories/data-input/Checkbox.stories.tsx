import type { Meta, StoryObj } from "@storybook/react";
import { Checkbox } from "../../components/Checkbox.tsx";

const meta = {
	title: "Data Input/Checkbox",
	component: Checkbox,
	args: {
		children: "Checkbox",
		disabled: false,
		checked: false,
		"aria-invalid": false,
	},
	argTypes: {
		children: {
			control: "text",
		},
		disabled: {
			control: "boolean",
			defaultValue: false,
		},
		checked: {
			control: "boolean",
			defaultValue: false,
		},
		"aria-invalid": {
			control: "boolean",
		},
		ref: {
			if: { arg: "hidden" },
		},
	},
} satisfies Meta<typeof Checkbox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Sandbox: Story = {};

export const States: Story = {
	render: () => (
		<div className="grid gap-1">
			<Checkbox checked={false}>Default</Checkbox>
			<Checkbox aria-invalid={true}>Invalid</Checkbox>
			<Checkbox checked={true}>Checked</Checkbox>
			<Checkbox disabled={true}>Disabled</Checkbox>
			<Checkbox disabled={true} checked={true}>
				Disabled Checked
			</Checkbox>
		</div>
	),
};

export const Group: Story = {
	render: () => (
		<div className="flex gap-12">
			<div className="grid gap-3">
				<small className="m-auto">Horizontal</small>
				<Checkbox.Group layout="horizontal">
					<Checkbox name="horizontal" value={1}>
						Default
					</Checkbox>
					<Checkbox name="horizontal" value={2}>
						Checked
					</Checkbox>
				</Checkbox.Group>
			</div>

			<div className="grid gap-3">
				<small className="m-auto">Vertical</small>
				<Checkbox.Group layout="vertical">
					<Checkbox name="vertical" value={1}>
						Default
					</Checkbox>
					<Checkbox name="vertical" value={2}>
						Checked
					</Checkbox>
				</Checkbox.Group>
			</div>
		</div>
	),
};
