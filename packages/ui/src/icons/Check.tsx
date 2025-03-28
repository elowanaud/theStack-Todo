import type { IconProps } from "../types.ts";

export function CheckIcon({ size = 24, ...props }: IconProps) {
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
			<title>Check Icon</title>
			<path d="M20 6 9 17l-5-5" />
		</svg>
	);
}
