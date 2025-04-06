"use client";

import { getQueryClient } from "@/lib/react-query";
import { QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import type { PropsWithChildren } from "react";

export function ReactQueryProvider({ children }: PropsWithChildren) {
	return (
		<QueryClientProvider client={getQueryClient()}>
			<ReactQueryDevtools />
			{children}
		</QueryClientProvider>
	);
}
