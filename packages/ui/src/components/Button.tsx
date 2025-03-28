import clsx from "clsx";
import { AnimatePresence, LazyMotion, domAnimation } from "motion/react";
import { span as MotionSpan } from "motion/react-m";
import type { ButtonHTMLAttributes, HTMLProps, ReactNode, Ref } from "react";
import { LoaderIcon } from "../icons/Loader.tsx";

type BaseButtonProps = {
	variant?: "primary" | "default" | "ghost";
	size?: "md" | "sm" | "icon-md" | "icon-sm";
	icon?: ReactNode;
	iconPosition?: "left" | "right";
};

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> &
	BaseButtonProps & {
		loading?: boolean;
		ref?: Ref<HTMLButtonElement>;
	};

export type ButtonChildProps = Omit<HTMLProps<HTMLDivElement>, "size"> &
	BaseButtonProps & {
		ref?: Ref<HTMLDivElement>;
	};

export function Button({
	variant = "primary",
	size = "md",
	type = "button",
	icon,
	iconPosition = "left",
	loading,
	disabled,
	className,
	children,
	ref,
	...props
}: ButtonProps) {
	return (
		<LazyMotion features={domAnimation}>
			<button
				type={type}
				className={clsx(
					"relative inline-flex items-center justify-center overflow-hidden rounded-md outline-none transition-colors disabled:cursor-not-allowed [&_svg]:shrink-0",
					{
						"bg-primary-500 text-white hover:bg-primary-600 focus-visible:ring-2 focus-visible:ring-primary-300 focus-visible:ring-offset-2 disabled:bg-primary-300":
							variant === "primary",
						"border border-neutral-300 bg-white text-black hover:not-disabled:border-primary-500 hover:not-disabled:text-primary-500 focus-visible:ring-2 focus-visible:ring-primary-300 focus-visible:ring-offset-2 disabled:opacity-50":
							variant === "default",
						"bg-transparent text-neutral-950 hover:not-disabled:bg-neutral-100 focus-visible:bg-neutral-100 disabled:opacity-50":
							variant === "ghost",
					},
					{
						"h-9 px-4 text-sm [&_svg]:size-5": size === "md",
						"h-7 px-3 text-xs [&_svg]:size-4": size === "sm",
						"size-9 [&_svg]:size-5": size === "icon-md",
						"size-7 [&_svg]:size-4": size === "icon-sm",
					},
					{
						"disabled:cursor-progress": loading,
					},
					className,
				)}
				ref={ref}
				disabled={disabled || loading}
				{...props}
			>
				<MotionSpan
					initial={{
						opacity: loading ? 0 : 1,
						y: loading ? "-100%" : "0%",
					}}
					animate={{
						opacity: loading ? 0 : 1,
						y: loading ? "-100%" : "0%",
					}}
					className="inline-flex items-center justify-center gap-1.5 whitespace-nowrap"
				>
					{iconPosition === "left" && icon}
					{children}
					{iconPosition === "right" && icon}
				</MotionSpan>
				<AnimatePresence>
					{loading && (
						<MotionSpan
							initial={{ y: "100%", opacity: 0 }}
							animate={{ y: 0, opacity: 1 }}
							className="absolute"
						>
							<LoaderIcon className="animate-spin" />
						</MotionSpan>
					)}
				</AnimatePresence>
			</button>
		</LazyMotion>
	);
}

export function ButtonChild({
	variant = "primary",
	size = "md",
	icon,
	iconPosition = "left",
	className,
	children,
	ref,
	...props
}: ButtonChildProps) {
	return (
		<div
			className={clsx(
				"relative inline-flex w-fit items-center justify-center gap-1.5 overflow-hidden whitespace-nowrap rounded-md outline-none transition-colors disabled:cursor-not-allowed [&_svg]:shrink-0",
				{
					"bg-primary-500 text-white hover:bg-primary-600 focus-visible:ring-2 focus-visible:ring-primary-300 focus-visible:ring-offset-2 disabled:bg-primary-300":
						variant === "primary",
					"border border-neutral-300 bg-white text-black hover:not-disabled:border-primary-500 hover:not-disabled:text-primary-500 focus-visible:ring-2 focus-visible:ring-primary-300 focus-visible:ring-offset-2 disabled:opacity-50":
						variant === "default",
					"bg-transparent text-neutral-950 hover:not-disabled:bg-neutral-100 focus-visible:bg-neutral-100 disabled:opacity-50":
						variant === "ghost",
				},
				{
					"h-9 px-4 text-sm [&_svg]:size-5": size === "md",
					"h-7 px-3 text-xs [&_svg]:size-4": size === "sm",
					"size-9 [&_svg]:size-5": size === "icon-md",
					"size-7 [&_svg]:size-4": size === "icon-sm",
				},
				className,
			)}
			ref={ref}
			{...props}
		>
			{iconPosition === "left" && icon}
			{children}
			{iconPosition === "right" && icon}
		</div>
	);
}
