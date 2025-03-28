import clsx from "clsx";
import type { InputHTMLAttributes, PropsWithChildren, Ref } from "react";
import { CheckIcon } from "../icons/Check.tsx";

export type CheckboxProps = PropsWithChildren &
	Omit<
		InputHTMLAttributes<HTMLInputElement>,
		"type" | "className" | "style"
	> & {
		ref?: Ref<HTMLInputElement>;
	};

export function Checkbox({ children, ref, ...props }: CheckboxProps) {
	return (
		<label className="group/checkbox flex items-center gap-2 has-disabled:cursor-not-allowed has-disabled:opacity-50">
			<span className="relative block size-4 rounded-sm border border-neutral-300 transition-colors group-hover/checkbox:border-primary-500 group-has-aria-invalid/checkbox:border-error-500 group-has-checked/checkbox:border-primary-500 group-has-disabled/checkbox:border-neutral-500 group-has-checked/checkbox:bg-primary-500 group-has-disabled/checkbox:bg-neutral-200 group-has-focus-visible/checkbox:ring-2 group-has-focus-visible/checkbox:ring-primary-300 group-has-focus-visible/checkbox:ring-offset-1 group-has-disabled/checkbox:before:bg-neutral-500">
				<CheckIcon className="absolute top-0 left-0 size-full scale-0 stroke-3 text-transparent transition-all group-has-checked/checkbox:scale-100 group-has-checked/checkbox:text-white group-has-disabled/checkbox:text-neutral-700 group-has-checked/checkbox:delay-75" />
				<input ref={ref} type="checkbox" className="sr-only" {...props} />
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

Checkbox.Group = Group;
