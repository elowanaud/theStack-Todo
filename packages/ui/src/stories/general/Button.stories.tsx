import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "../../components/Button.tsx";
import { HouseIcon } from "../../icons/index.ts";

const meta = {
	title: "General/Button",
	component: Button,
	argTypes: {
		children: {
			type: "string",
		},
		variant: {
			control: { type: "select" },
			options: ["primary", "default", "ghost"],
		},
		size: {
			control: { type: "select" },
			options: ["md", "sm", "icon-md", "icon-sm"],
		},
		icon: {
			control: { type: "select" },
			options: [<HouseIcon key={1} />],
		},
		iconPosition: {
			control: { type: "select" },
			options: ["left", "right"],
		},
		loading: { control: { type: "boolean" } },
		disabled: { control: { type: "boolean" } },
		type: { if: { arg: "hidden" } },
	},
	args: {
		children: "Button",
		variant: "primary",
		size: "md",
		icon: undefined,
		iconPosition: "left",
		loading: false,
		disabled: false,
	},
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Sandbox: Story = {};

export const PreviewPrimary: Story = {
	render: () => (
		<div className="flex gap-4">
			<div className="grid gap-4">
				<Button variant="primary">Button</Button>
				<Button variant="primary" disabled={true}>
					Button
				</Button>
				<Button variant="primary" loading={true}>
					Button
				</Button>
			</div>
			<div className="grid gap-4">
				<Button variant="primary" icon={<HouseIcon />}>
					Button
				</Button>
				<Button variant="primary" icon={<HouseIcon />} disabled={true}>
					Button
				</Button>
				<Button variant="primary" icon={<HouseIcon />} loading={true}>
					Button
				</Button>
			</div>
			<div className="grid gap-4">
				<Button variant="primary" icon={<HouseIcon />} iconPosition="right">
					Button
				</Button>
				<Button
					variant="primary"
					icon={<HouseIcon />}
					iconPosition="right"
					disabled={true}
				>
					Button
				</Button>
				<Button
					variant="primary"
					icon={<HouseIcon />}
					iconPosition="right"
					loading={true}
				>
					Button
				</Button>
			</div>
			<div className="grid gap-4">
				<Button variant="primary" size="icon-md" icon={<HouseIcon />} />
				<Button
					variant="primary"
					size="icon-md"
					icon={<HouseIcon />}
					disabled={true}
				/>
				<Button
					variant="primary"
					size="icon-md"
					icon={<HouseIcon />}
					loading={true}
				/>
			</div>

			<div className="grid gap-4">
				<Button variant="primary" size="sm">
					Button
				</Button>
				<Button variant="primary" size="sm" disabled={true}>
					Button
				</Button>
				<Button variant="primary" size="sm" loading={true}>
					Button
				</Button>
			</div>
			<div className="grid gap-4">
				<Button variant="primary" size="sm" icon={<HouseIcon />}>
					Button
				</Button>
				<Button
					variant="primary"
					size="sm"
					icon={<HouseIcon />}
					disabled={true}
				>
					Button
				</Button>
				<Button variant="primary" size="sm" icon={<HouseIcon />} loading={true}>
					Button
				</Button>
			</div>
			<div className="grid gap-4">
				<Button
					variant="primary"
					size="sm"
					icon={<HouseIcon />}
					iconPosition="right"
				>
					Button
				</Button>
				<Button
					variant="primary"
					size="sm"
					icon={<HouseIcon />}
					iconPosition="right"
					disabled={true}
				>
					Button
				</Button>
				<Button
					variant="primary"
					size="sm"
					icon={<HouseIcon />}
					iconPosition="right"
					loading={true}
				>
					Button
				</Button>
			</div>
			<div className="grid gap-4">
				<Button variant="primary" size="icon-sm" icon={<HouseIcon />} />
				<Button
					variant="primary"
					size="icon-sm"
					icon={<HouseIcon />}
					disabled={true}
				/>
				<Button
					variant="primary"
					size="icon-sm"
					icon={<HouseIcon />}
					loading={true}
				/>
			</div>
		</div>
	),
};

export const PreviewDefault: Story = {
	render: () => (
		<div className="flex gap-4">
			<div className="grid gap-4">
				<Button variant="default">Button</Button>
				<Button variant="default" disabled={true}>
					Button
				</Button>
				<Button variant="default" loading={true}>
					Button
				</Button>
			</div>
			<div className="grid gap-4">
				<Button variant="default" icon={<HouseIcon />}>
					Button
				</Button>
				<Button variant="default" icon={<HouseIcon />} disabled={true}>
					Button
				</Button>
				<Button variant="default" icon={<HouseIcon />} loading={true}>
					Button
				</Button>
			</div>
			<div className="grid gap-4">
				<Button variant="default" icon={<HouseIcon />} iconPosition="right">
					Button
				</Button>
				<Button
					variant="default"
					icon={<HouseIcon />}
					iconPosition="right"
					disabled={true}
				>
					Button
				</Button>
				<Button
					variant="default"
					icon={<HouseIcon />}
					iconPosition="right"
					loading={true}
				>
					Button
				</Button>
			</div>
			<div className="grid gap-4">
				<Button variant="default" size="icon-md" icon={<HouseIcon />} />
				<Button
					variant="default"
					size="icon-md"
					icon={<HouseIcon />}
					disabled={true}
				/>
				<Button
					variant="default"
					size="icon-md"
					icon={<HouseIcon />}
					loading={true}
				/>
			</div>

			<div className="grid gap-4">
				<Button variant="default" size="sm">
					Button
				</Button>
				<Button variant="default" size="sm" disabled={true}>
					Button
				</Button>
				<Button variant="default" size="sm" loading={true}>
					Button
				</Button>
			</div>
			<div className="grid gap-4">
				<Button variant="default" size="sm" icon={<HouseIcon />}>
					Button
				</Button>
				<Button
					variant="default"
					size="sm"
					icon={<HouseIcon />}
					disabled={true}
				>
					Button
				</Button>
				<Button variant="default" size="sm" icon={<HouseIcon />} loading={true}>
					Button
				</Button>
			</div>
			<div className="grid gap-4">
				<Button
					variant="default"
					size="sm"
					icon={<HouseIcon />}
					iconPosition="right"
				>
					Button
				</Button>
				<Button
					variant="default"
					size="sm"
					icon={<HouseIcon />}
					iconPosition="right"
					disabled={true}
				>
					Button
				</Button>
				<Button
					variant="default"
					size="sm"
					icon={<HouseIcon />}
					iconPosition="right"
					loading={true}
				>
					Button
				</Button>
			</div>
			<div className="grid gap-4">
				<Button variant="default" size="icon-sm" icon={<HouseIcon />} />
				<Button
					variant="default"
					size="icon-sm"
					icon={<HouseIcon />}
					disabled={true}
				/>
				<Button
					variant="default"
					size="icon-sm"
					icon={<HouseIcon />}
					loading={true}
				/>
			</div>
		</div>
	),
};

export const PreviewGhost: Story = {
	render: () => (
		<div className="flex gap-4">
			<div className="grid gap-4">
				<Button variant="ghost">Button</Button>
				<Button variant="ghost" disabled={true}>
					Button
				</Button>
				<Button variant="ghost" loading={true}>
					Button
				</Button>
			</div>
			<div className="grid gap-4">
				<Button variant="ghost" icon={<HouseIcon />}>
					Button
				</Button>
				<Button variant="ghost" icon={<HouseIcon />} disabled={true}>
					Button
				</Button>
				<Button variant="ghost" icon={<HouseIcon />} loading={true}>
					Button
				</Button>
			</div>
			<div className="grid gap-4">
				<Button variant="ghost" icon={<HouseIcon />} iconPosition="right">
					Button
				</Button>
				<Button
					variant="ghost"
					icon={<HouseIcon />}
					iconPosition="right"
					disabled={true}
				>
					Button
				</Button>
				<Button
					variant="ghost"
					icon={<HouseIcon />}
					iconPosition="right"
					loading={true}
				>
					Button
				</Button>
			</div>
			<div className="grid gap-4">
				<Button variant="ghost" size="icon-md" icon={<HouseIcon />} />
				<Button
					variant="ghost"
					size="icon-md"
					icon={<HouseIcon />}
					disabled={true}
				/>
				<Button
					variant="ghost"
					size="icon-md"
					icon={<HouseIcon />}
					loading={true}
				/>
			</div>

			<div className="grid gap-4">
				<Button variant="ghost" size="sm">
					Button
				</Button>
				<Button variant="ghost" size="sm" disabled={true}>
					Button
				</Button>
				<Button variant="ghost" size="sm" loading={true}>
					Button
				</Button>
			</div>
			<div className="grid gap-4">
				<Button variant="ghost" size="sm" icon={<HouseIcon />}>
					Button
				</Button>
				<Button variant="ghost" size="sm" icon={<HouseIcon />} disabled={true}>
					Button
				</Button>
				<Button variant="ghost" size="sm" icon={<HouseIcon />} loading={true}>
					Button
				</Button>
			</div>
			<div className="grid gap-4">
				<Button
					variant="ghost"
					size="sm"
					icon={<HouseIcon />}
					iconPosition="right"
				>
					Button
				</Button>
				<Button
					variant="ghost"
					size="sm"
					icon={<HouseIcon />}
					iconPosition="right"
					disabled={true}
				>
					Button
				</Button>
				<Button
					variant="ghost"
					size="sm"
					icon={<HouseIcon />}
					iconPosition="right"
					loading={true}
				>
					Button
				</Button>
			</div>
			<div className="grid gap-4">
				<Button variant="ghost" size="icon-sm" icon={<HouseIcon />} />
				<Button
					variant="ghost"
					size="icon-sm"
					icon={<HouseIcon />}
					disabled={true}
				/>
				<Button
					variant="ghost"
					size="icon-sm"
					icon={<HouseIcon />}
					loading={true}
				/>
			</div>
		</div>
	),
};
