import { zodResolver } from "@hookform/resolvers/zod";
import { type UseFormProps, useForm } from "react-hook-form";
import { z } from "zod";

const validator = z.object({
	title: z.string().min(1).max(255),
});

export type TodoFormValues = z.infer<typeof validator>;

type UseTodoFormProps = Omit<UseFormProps<TodoFormValues>, "resolver">;

export default function useTodoForm(props?: UseTodoFormProps) {
	return useForm<TodoFormValues>({
		resolver: zodResolver(validator),
		...props,
	});
}
