import getPrefetchTodos from "@/features/todos/actions/getPrefetchTodos";
import TodoForm from "@/features/todos/components/TodoForm";
import TodosList from "@/features/todos/components/TodosList";
import { HydrationBoundary } from "@tanstack/react-query";

export default async function HomePage() {
	const prefetchTodos = await getPrefetchTodos();

	return (
		<main className="grid gap-4">
			<TodoForm />
			<HydrationBoundary state={prefetchTodos}>
				<TodosList />
			</HydrationBoundary>
		</main>
	);
}
