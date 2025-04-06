import type { IconProps } from "../types.ts";

export function PlusIcon({ size = 24, ...props }: IconProps) {
	return (
		<svg
			width={size}
			height={size}
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth={2}
			strokeLinecap="round"
			strokeLinejoin="round"
			{...props}
		>
			<title>Plus Icon</title>
			<path d="M5 12h14" />
			<path d="M12 5v14" />
		</svg>
	);
}
