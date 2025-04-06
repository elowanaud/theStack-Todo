import clsx from "clsx";
import NextLink, { type LinkProps as NextLinkProps } from "next/link";
import type { PropsWithChildren } from "react";

export type LinkProps = PropsWithChildren &
	NextLinkProps & {
		className?: string;
		tabIndex?: number;
	};

export function Link({ className, ...props }: LinkProps) {
	return (
		<NextLink
			className={clsx(
				"font-medium text-primary-500 text-sm underline transition-colors hover:text-primary-700",
				className,
			)}
			{...props}
		/>
	);
}
