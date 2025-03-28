import type { Meta, StoryObj } from "@storybook/react";
import { Select } from "../../components/Select.tsx";

const meta = {
	title: "Data Input/Select",
	component: Select,
	argTypes: {
		options: {
			control: {
				type: "object",
			},
		},
		menuIsOpen: {
			control: {
				type: "boolean",
			},
		},
		isMulti: {
			control: {
				type: "boolean",
			},
		},
	},
	args: {
		options: [
			{
				value: 1,
				label: "Option 1",
			},
			{
				value: 2,
				label: "Option 2",
			},
			{
				value: 3,
				label: "Option 3",
			},
			{
				value: 4,
				label: "Option 4",
			},
			{
				value: 5,
				label: "Option 5",
			},
			{
				value: 6,
				label: "Option 6",
			},
			{
				value: 7,
				label: "Option 7",
			},
			{
				value: 8,
				label: "Option 8",
			},
			{
				value: 9,
				label: "Option 9",
			},
			{
				value: 10,
				label: "Option 10",
			},
			{
				value: 11,
				label: "Option 11",
			},
			{
				value: 12,
				label: "Option 12",
			},
			{
				value: 13,
				label: "Option 13",
			},
			{
				value: 14,
				label: "Option 14",
			},
			{
				value: 15,
				label: "Option 15",
			},
		],
		isDisabled: false,
		className: "w-64",
	},
} satisfies Meta<typeof Select>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Sandbox: Story = {};

export const States: Story = {
	render: () => (
		<div className="grid w-64 gap-1">
			<Select />
			<Select placeholder="Hello World" />
			<Select inputValue="Hello World" />
			<Select aria-invalid={true} />
			<Select isDisabled={true} />
			<Select placeholder="Hello World" isDisabled={true} />
			<Select isDisabled={true} inputValue="Hello World" />
		</div>
	),
};
