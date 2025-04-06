import { useApi } from "@/lib/api/client";
import { getQueryClient } from "@/lib/react-query";
import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";

export default function useDeleteTodoMutation() {
	const queryClient = getQueryClient();

	return useMutation({
		mutationFn: (id: number) => useApi.todos({ id }).$delete().unwrap(),
		onError: () => toast.error("Failed to delete todo"),
		onSuccess: () => toast.success("Todo deleted successfully"),
		onSettled: () => queryClient.invalidateQueries({ queryKey: ["todos"] }),
	});
}
