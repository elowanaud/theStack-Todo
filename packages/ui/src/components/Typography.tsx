import clsx from "clsx";
import type { HTMLAttributes, LabelHTMLAttributes } from "react";

export type LabelProps = LabelHTMLAttributes<HTMLLabelElement>;

export function Label({ className, ...props }: LabelProps) {
	return (
		<label
			className={clsx(
				" font-medium text-sm group-has-required/form-field:before:pr-0.5 group-has-required/form-field:before:text-error-500 group-has-required/form-field:before:content-['*']",
				className,
			)}
			{...props}
		/>
	);
}

export type ErrorTextProps = HTMLAttributes<HTMLSpanElement>;

export function ErrorText({ className, ...props }: ErrorTextProps) {
	return (
		<span
			className={clsx("font-medium text-error-500 text-xs", className)}
			{...props}
		/>
	);
}

export type HintTextProps = HTMLAttributes<HTMLSpanElement>;

export function HintText({ className, ...props }: HintTextProps) {
	return (
		<span
			className={clsx("font-medium text-neutral-500 text-xs", className)}
			{...props}
		/>
	);
}
