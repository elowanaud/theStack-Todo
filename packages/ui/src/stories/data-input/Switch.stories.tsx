import type { Meta, StoryObj } from "@storybook/react";
import { Switch } from "../../components/Switch.tsx";

const meta = {
	title: "Data Input/Switch",
	component: Switch,
	argTypes: {
		checked: {
			control: "boolean",
		},
		disabled: {
			control: "boolean",
		},
		ref: {
			if: { arg: "hidden" },
		},
	},
} satisfies Meta<typeof Switch>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Sandbox: Story = {};

export const States: Story = {
	render: () => (
		<div className="grid gap-1">
			<Switch />
			<Switch checked={true} />
			<Switch disabled={true} />
			<Switch disabled={true} checked={true} />
		</div>
	),
};
