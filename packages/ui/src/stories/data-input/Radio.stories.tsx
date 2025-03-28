import type { Meta, StoryObj } from "@storybook/react";
import { Radio } from "../../components/Radio.tsx";

const meta = {
	title: "Data Input/Radio",
	component: Radio,
	args: {
		children: "Radio",
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
		},
		checked: {
			control: "boolean",
		},
		"aria-invalid": {
			control: "boolean",
		},
		ref: {
			if: { arg: "hidden" },
		},
	},
} satisfies Meta<typeof Radio>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Sandbox: Story = {};

export const States: Story = {
	render: () => (
		<div className="grid gap-1">
			<Radio checked={false}>Default</Radio>
			<Radio aria-invalid={true}>Invalid</Radio>
			<Radio checked={true}>Checked</Radio>
			<Radio disabled={true}>Disabled</Radio>
			<Radio disabled={true} checked={true}>
				Disabled Checked
			</Radio>
		</div>
	),
};

export const Group: Story = {
	render: () => (
		<div className="flex gap-12">
			<div className="grid gap-3">
				<small className="m-auto">Horizontal</small>
				<Radio.Group layout="horizontal">
					<Radio name="horizontal" value={1}>
						Default
					</Radio>
					<Radio name="horizontal" value={2}>
						Checked
					</Radio>
				</Radio.Group>
			</div>

			<div className="grid gap-3">
				<small className="m-auto">Vertical</small>
				<Radio.Group layout="vertical">
					<Radio name="vertical" value={1}>
						Default
					</Radio>
					<Radio name="vertical" value={2}>
						Checked
					</Radio>
				</Radio.Group>
			</div>
		</div>
	),
};
