"use client";

import clsx from "clsx";
import { LazyMotion, domAnimation } from "motion/react";
import { div as MotionDiv } from "motion/react-m";
import ReactSelect, {
	type ClassNamesConfig,
	type GroupBase,
	type Props,
	type SelectComponentsConfig,
	components as reactSelectComponents,
} from "react-select";
import AsyncReactSelect, { type AsyncProps } from "react-select/async";
import {
	ChevronDownIcon,
	NoDataIcon,
	SearchIcon,
	XIcon,
} from "../icons/index.ts";

export function Select<
	Option,
	IsMulti extends boolean = false,
	Group extends GroupBase<Option> = GroupBase<Option>,
>(
	props: Omit<
		Props<Option, IsMulti, Group>,
		| "unstyled"
		| "classNames"
		| "isClearable"
		| "backspaceRemovesValue"
		| "closeMenuOnSelect"
		| "components"
		| "loadingMessage"
	>,
) {
	return (
		<LazyMotion features={domAnimation}>
			<ReactSelect
				unstyled={true}
				isClearable={true}
				backspaceRemovesValue={true}
				closeMenuOnSelect={!props.isMulti}
				classNames={classNames<Option, IsMulti, Group>()}
				components={components<Option, IsMulti, Group>({
					isSearchable: props.isSearchable,
				})}
				{...props}
			/>
		</LazyMotion>
	);
}

export function SelectAsync<
	Option,
	IsMulti extends boolean = false,
	Group extends GroupBase<Option> = GroupBase<Option>,
>(
	props: Omit<
		AsyncProps<Option, IsMulti, Group>,
		| "unstyled"
		| "classNames"
		| "isClearable"
		| "backspaceRemovesValue"
		| "closeMenuOnSelect"
		| "components"
		| "options"
		| "defaultOptions"
		| "loadingMessage"
	>,
) {
	return (
		<LazyMotion features={domAnimation}>
			<AsyncReactSelect
				unstyled={true}
				isClearable={true}
				backspaceRemovesValue={true}
				closeMenuOnSelect={!props.isMulti}
				defaultOptions={true} // Fetch on mount
				cacheOptions={true} // Cache options
				classNames={classNames<Option, IsMulti, Group>()}
				components={components<Option, IsMulti, Group>({
					isSearchable: props.isSearchable,
				})}
				{...props}
			/>
		</LazyMotion>
	);
}

function classNames<
	Option,
	IsMulti extends boolean = false,
	Group extends GroupBase<Option> = GroupBase<Option>,
>(): ClassNamesConfig<Option, IsMulti, Group> {
	return {
		control: (state) =>
			clsx(
				"min-h-9 w-full rounded-md border border-neutral-300 bg-white py-1.5 pr-2 pl-3 text-neutral-950 text-sm transition-colors hover:border-primary-500 has-aria-invalid:border-error-500",
				{
					"border-primary-500 ring-1 ring-primary-500 has-aria-invalid:border-error-500 has-aria-invalid:ring-error-500":
						state.isFocused,
					"cursor-not-allowed bg-neutral-100 opacity-50 ": state.isDisabled,
				},
			),
		placeholder: (_state) => clsx("text-neutral-400"),
		menu: (_state) =>
			clsx(
				"select-menu mt-1 rounded-md border border-neutral-300 bg-white p-1 text-sm shadow",
			),
		valueContainer: (_state) => clsx("gap-1"),
		menuList: (_state) => clsx("max-h-40!"),
		option: (state) =>
			clsx("rounded-sm px-3 py-1 transition-colors hover:bg-neutral-100", {
				"bg-primary-50 hover:bg-primary-100": state.isSelected,
			}),
		noOptionsMessage: (_state) => clsx("px-3 py-1"),
		loadingMessage: (_state) => clsx("px-3 py-1"),
		input: (_state) => clsx("visible!"),
		multiValue: (_state) =>
			clsx("gap-0.5 rounded-sm bg-neutral-100 px-2 py-0.5"),
		multiValueRemove: (_state) =>
			clsx("cursor-pointer text-neutral-500 hover:text-neutral-950"),
	};
}

function components<
	Option,
	IsMulti extends boolean = false,
	Group extends GroupBase<Option> = GroupBase<Option>,
>({
	isSearchable = true,
}: { isSearchable?: boolean }): SelectComponentsConfig<Option, IsMulti, Group> {
	return {
		Menu: ({ children, ...props }) => (
			<MotionDiv
				initial={{ opacity: 0, scale: 0.95 }}
				animate={{ opacity: 1, scale: 1 }}
			>
				<reactSelectComponents.Menu {...props}>
					{children}
				</reactSelectComponents.Menu>
			</MotionDiv>
		),
		DropdownIndicator: ({ children, ...props }) => (
			<reactSelectComponents.DropdownIndicator {...props}>
				{props.isFocused && isSearchable ? (
					<SearchIcon className="size-5 text-neutral-400" />
				) : (
					<ChevronDownIcon className="size-5 text-neutral-400" />
				)}
			</reactSelectComponents.DropdownIndicator>
		),
		MultiValueRemove: ({ children, ...props }) => (
			<reactSelectComponents.MultiValueRemove {...props}>
				<XIcon className="size-4 cursor-pointer text-neutral-500 hover:text-neutral-950" />
			</reactSelectComponents.MultiValueRemove>
		),
		NoOptionsMessage: ({ children, ...props }) => (
			<reactSelectComponents.NoOptionsMessage {...props}>
				<div className="grid justify-center">
					<NoDataIcon className="size-16" />
					{children}
				</div>
			</reactSelectComponents.NoOptionsMessage>
		),
		LoadingMessage: ({ children, ...props }) => (
			<reactSelectComponents.LoadingMessage {...props}>
				<div className="grid gap-1">
					{Array.from({ length: 6 }).map((_, i) => (
						<span
							// biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
							key={i}
							className="my-1 h-4 w-full animate-pulse rounded-sm bg-neutral-300"
						/>
					))}
				</div>
			</reactSelectComponents.LoadingMessage>
		),
		ClearIndicator: () => null,
		IndicatorSeparator: () => null,
		LoadingIndicator: () => null,
	};
}
