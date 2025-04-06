"use server";

import { getApi } from "@/lib/api/server";
import { getQueryClient } from "@/lib/react-query";
import type { getTodosProps } from "@/types/queries/todos";
import { dehydrate } from "@tanstack/react-query";
import { headers } from "next/headers";

export default async function getPrefetchTodos(props?: getTodosProps) {
	const queryClient = getQueryClient();

	await queryClient.prefetchQuery({
		queryKey: ["todos", props?.query],
		queryFn: async () =>
			getApi(await headers())
				.todos.$get(props)
				.unwrap(),
	});

	return dehydrate(queryClient);
}
