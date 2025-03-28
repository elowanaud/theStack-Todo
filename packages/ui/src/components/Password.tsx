"use client";

import clsx from "clsx";
import { useState } from "react";
import { EyeIcon } from "../icons/Eye.tsx";
import { EyeOffIcon } from "../icons/EyeOff.tsx";
import { Input, type InputProps } from "./Input.tsx";
export type PasswordProps = Omit<InputProps, "type">;

export function Password({ className, disabled, ...props }: PasswordProps) {
	const [showPassword, setShowPassword] = useState(false);

	return (
		<div className="relative flex items-center">
			<Input
				className={clsx("pr-9", className)}
				type={showPassword ? "text" : "password"}
				disabled={disabled}
				{...props}
			/>

			<button
				type="button"
				tabIndex={-1}
				className="absolute right-1 inline-flex size-7 items-center justify-center overflow-hidden rounded-md bg-transparent text-neutral-950 outline-none transition-colors hover:not-disabled:bg-neutral-100 focus-visible:bg-neutral-100 disabled:cursor-not-allowed disabled:opacity-50 [&_svg]:size-4 [&_svg]:shrink-0"
				disabled={disabled}
				onClick={() => setShowPassword(!showPassword)}
			>
				{showPassword ? <EyeOffIcon /> : <EyeIcon />}
			</button>
		</div>
	);
}
