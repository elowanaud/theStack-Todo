import { useApi } from "@/lib/api/client";
import type { getTodosProps } from "@/types/queries/todos";
import { useQuery } from "@tanstack/react-query";

export default function useTodos(props?: getTodosProps) {
	return useQuery({
		queryKey: ["todos", props?.query],
		queryFn: () => useApi.todos.$get(props).unwrap(),
	});
}
