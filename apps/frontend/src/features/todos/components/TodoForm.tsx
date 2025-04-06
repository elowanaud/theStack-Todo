"use client";

import useCreateTodoMutation from "@/features/todos/hooks/useCreateTodoMutation";
import useTodoForm, {
	type TodoFormValues,
} from "@/features/todos/hooks/useTodoForm";
import { Button } from "@the-stack/ui/components/Button";
import { Input } from "@the-stack/ui/components/Input";
import { PlusIcon } from "@the-stack/ui/icons";

export default function TodoForm() {
	const {
		register,
		handleSubmit,
		reset,
		formState: { isSubmitting },
	} = useTodoForm();
	const { mutateAsync: createTodo } = useCreateTodoMutation();

	const handleCreateTodo = async (data: TodoFormValues) => {
		await createTodo(data);
		reset();
	};

	return (
		<form
			onSubmit={handleSubmit(handleCreateTodo)}
			className="flex items-center gap-2"
		>
			<Input {...register("title")} />
			<Button icon={<PlusIcon />} loading={isSubmitting} size="icon-md" />
		</form>
	);
}
