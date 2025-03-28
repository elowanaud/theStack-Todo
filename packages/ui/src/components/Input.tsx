import clsx from "clsx";
import type { InputHTMLAttributes, Ref } from "react";

export type InputProps = InputHTMLAttributes<HTMLInputElement> & {
	ref?: Ref<HTMLInputElement>;
};

export function Input({ className, ref, ...props }: InputProps) {
	return (
		<input
			ref={ref}
			className={clsx(
				"h-9 w-full rounded-md border border-neutral-300 bg-white px-3 text-neutral-950 text-sm transition-colors placeholder:text-neutral-400 hover:border-primary-500 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary-500 disabled:cursor-not-allowed disabled:bg-neutral-100 disabled:opacity-50 aria-invalid:border-error-500 aria-invalid:focus-visible:ring-error-500",
				className,
			)}
			{...props}
		/>
	);
}
