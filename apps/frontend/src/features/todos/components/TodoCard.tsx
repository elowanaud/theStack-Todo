import useDeleteTodoMutation from "@/features/todos/hooks/useDeleteTodoMutation";
import useUpdateTodoMutation from "@/features/todos/hooks/useUpdateTodoMutation";
import { Button } from "@the-stack/ui/components/Button";
import { Checkbox } from "@the-stack/ui/components/Checkbox";
import { TrashIcon } from "@the-stack/ui/icons";
import clsx from "clsx";

export type TodoCardProps = {
	id: number;
	title: string;
	completed: boolean;
	authorizations: {
		canEdit: boolean;
		canDelete: boolean;
	};
};

export default function TodoCard({
	id,
	title,
	completed,
	authorizations,
}: TodoCardProps) {
	const { mutate: deleteTodo, isPending: isDeleting } = useDeleteTodoMutation();
	const { mutate: updateTodo } = useUpdateTodoMutation();

	return (
		<div className="flex items-center justify-between border-neutral-500 border-b p-2">
			<div className="flex items-center gap-2">
				{authorizations.canEdit && (
					<Checkbox
						defaultChecked={completed}
						onChange={(event) => {
							updateTodo({
								id,
								completed: event.target.checked,
							});
						}}
					/>
				)}
				<h2
					className={clsx({
						"line-through opacity-50": completed,
					})}
				>
					{title}
				</h2>
			</div>
			{authorizations.canDelete && (
				<Button
					variant="ghost"
					size="icon-sm"
					icon={<TrashIcon />}
					loading={isDeleting}
					onClick={() => deleteTodo(id)}
				/>
			)}
		</div>
	);
}
