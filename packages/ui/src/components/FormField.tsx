import clsx from "clsx";
import type { PropsWithChildren } from "react";
import {
	ErrorText,
	type ErrorTextProps,
	HintText,
	type HintTextProps,
	Label,
	type LabelProps,
} from "./Typography.tsx";

export type FormFieldProps = PropsWithChildren & {
	className?: string;
	label?: string;
	labelOptions?: Omit<LabelProps, "children">;
	hint?: string;
	hintOptions?: Omit<HintTextProps, "children">;
	error?: string;
	errorOptions?: Omit<ErrorTextProps, "children">;
};

export function FormField({
	className,
	label,
	labelOptions,
	hint,
	hintOptions,
	error,
	errorOptions,
	children,
}: FormFieldProps) {
	const classes = clsx("group/form-field grid gap-1", className);

	return (
		<div className={classes}>
			{label && <Label {...labelOptions}>{label}</Label>}
			{children}
			{hint && <HintText {...hintOptions}>{hint}</HintText>}
			{error && <ErrorText {...errorOptions}>{error}</ErrorText>}
		</div>
	);
}
