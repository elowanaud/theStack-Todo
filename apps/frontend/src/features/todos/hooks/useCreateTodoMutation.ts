import { useApi } from "@/lib/api/client";
import { getQueryClient } from "@/lib/react-query";
import type { createTodoProps } from "@/types/queries/todos";
import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";

export default function useCreateTodoMutation() {
	const queryClient = getQueryClient();

	return useMutation({
		mutationFn: (formdata: createTodoProps) =>
			useApi.todos.$post(formdata).unwrap(),
		onError: () => toast.error("Failed to create todo"),
		onSuccess: () => toast.success("Todo created successfully"),
		onSettled: () => queryClient.invalidateQueries({ queryKey: ["todos"] }),
	});
}
