import type { IconProps } from "../types.ts";

export function LoaderIcon({ size = 24, ...props }: IconProps) {
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
			<title>Loader Icon</title>
			<path d="M21 12a9 9 0 1 1-6.219-8.56" />
		</svg>
	);
}
