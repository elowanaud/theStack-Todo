"use client";

import TodoCard from "@/features/todos/components/TodoCard";
import useTodos from "@/features/todos/hooks/useTodos";

export default function TodosList() {
	const { data, isPending, isError, error } = useTodos();

	if (isPending) {
		return <div>Loading...</div>;
	}

	if (isError) {
		return <div>Error: {error.message}</div>;
	}

	if (data.todos.length === 0) {
		return <div>No todos found</div>;
	}

	return (
		<div className="grid gap-2">
			{data.todos.map((todo) => (
				<TodoCard
					key={todo.id}
					id={todo.id}
					title={todo.title}
					completed={todo.completed}
					authorizations={{
						canDelete: todo.meta.authorizations.delete,
						canEdit: todo.meta.authorizations.update,
					}}
				/>
			))}
		</div>
	);
}
