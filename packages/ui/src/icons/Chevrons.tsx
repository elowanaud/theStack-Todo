import type { IconProps } from "../types.ts";

export function ChevronDownIcon({ size = 24, ...props }: IconProps) {
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
			<title>Chevron Down Icon</title>
			<path d="m6 9 6 6 6-6" />
		</svg>
	);
}
