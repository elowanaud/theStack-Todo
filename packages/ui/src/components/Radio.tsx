import clsx from "clsx";
import type { InputHTMLAttributes, PropsWithChildren, Ref } from "react";

export type RadioProps = PropsWithChildren &
	Omit<
		InputHTMLAttributes<HTMLInputElement>,
		"type" | "className" | "style"
	> & {
		ref?: Ref<HTMLInputElement>;
	};

export function Radio({ children, ref, ...props }: RadioProps) {
	return (
		<label className="group/radio flex items-center gap-2 has-disabled:cursor-not-allowed has-disabled:opacity-50">
			<span className="before:-translate-1/2 relative block size-4 rounded-full border border-neutral-300 transition-colors before:absolute before:top-1/2 before:left-1/2 before:size-1/2 before:scale-0 before:rounded-full before:bg-transparent before:transition-all group-hover/radio:border-primary-500 group-has-aria-invalid/radio:border-error-500 group-has-checked/radio:border-primary-500 group-has-disabled/radio:border-neutral-500 group-has-checked/radio:bg-primary-500 group-has-disabled/radio:bg-neutral-200 group-has-focus-visible/radio:ring-2 group-has-focus-visible/radio:ring-primary-300 group-has-focus-visible/radio:ring-offset-1 group-has-checked/radio:before:scale-100 group-has-checked/radio:before:bg-white group-has-disabled/radio:before:bg-neutral-700 group-has-checked/radio:before:delay-75">
				<input ref={ref} type="radio" className="sr-only" {...props} />
			</span>
			<span className="text-neutral-950 text-sm">{children}</span>
		</label>
	);
}

type GroupProps = PropsWithChildren & {
	layout?: "horizontal" | "vertical";
};

function Group({ children, layout = "horizontal" }: GroupProps) {
	return (
		<div
			className={clsx({
				"flex gap-4": layout === "horizontal",
				"grid gap-1.5": layout === "vertical",
			})}
		>
			{children}
		</div>
	);
}

Radio.Group = Group;
