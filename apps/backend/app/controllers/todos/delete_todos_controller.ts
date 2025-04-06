import type { HttpContext } from "@adonisjs/core/http";
import Todo from "#models/todo";

export default class DeleteTodosController {
	async handle({ request, response, bouncer }: HttpContext) {
		const todo = await Todo.findOrFail(request.param("id"));
		await bouncer.with("TodoPolicy").authorize("delete", todo);

		await todo.delete();

		return response.noContent();
	}
}
