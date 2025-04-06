import { inject } from "@adonisjs/core";
import type { HttpContext } from "@adonisjs/core/http";
import vine from "@vinejs/vine";
import Todo from "#models/todo";
import { TodoPresenter } from "#presenters/todo_presenter";
import TodoValidator from "#validators/todo";

@inject()
export default class UpdateTodosController {
	constructor(protected presenter: TodoPresenter) {}

	async handle({ request, bouncer }: HttpContext) {
		const todo = await Todo.findOrFail(request.param("id"));
		await bouncer.with("TodoPolicy").authorize("update", todo);

		const payload = await request.validateUsing(validator);
		await todo.merge(payload).save();

		return this.presenter.toJSON(todo);
	}
}

export const validator = vine.compile(
	vine.object({
		title: TodoValidator.getProperties().title.optional(),
		completed: TodoValidator.getProperties().completed.optional(),
	}),
);
