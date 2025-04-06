import { useApi } from "@/lib/api/client";
import { getQueryClient } from "@/lib/react-query";
import type { updateTodoProps } from "@/types/queries/todos";
import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";

export default function useUpdateTodoMutation() {
	const queryClient = getQueryClient();

	return useMutation({
		mutationFn: (formdata: updateTodoProps & { id: number | string }) =>
			useApi.todos({ id: formdata.id }).$put(formdata).unwrap(),
		onError: () => toast.error("Failed to update todo"),
		onSuccess: () => toast.success("Todo updated successfully"),
		onSettled: () => queryClient.invalidateQueries({ queryKey: ["todos"] }),
	});
}
