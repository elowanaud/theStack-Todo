import type { InputHTMLAttributes, Ref } from "react";

export type SwitchProps = Omit<
	InputHTMLAttributes<HTMLInputElement>,
	"type" | "className" | "children" | "style"
> & {
	ref?: Ref<HTMLInputElement>;
};

export function Switch({ ref, ...props }: SwitchProps) {
	return (
		<label className="group/switch relative block h-6 w-11 rounded-full border-2 border-transparent bg-neutral-300 transition-colors not-has-disabled:hover:bg-neutral-400 has-disabled:cursor-not-allowed has-checked:bg-primary-500 has-disabled:opacity-50 has-focus-visible:ring-2 has-focus-visible:ring-primary-300 has-focus-visible:ring-offset-1 not-has-disabled:has-checked:hover:bg-primary-600">
			<span className="absolute aspect-square h-full rounded-full bg-white transition-transform group-has-checked/switch:translate-x-full" />
			<input ref={ref} type="checkbox" className="sr-only" {...props} />
		</label>
	);
}
