import { inject } from "@adonisjs/core";
import type { HttpContext } from "@adonisjs/core/http";
import vine from "@vinejs/vine";
import Todo from "#models/todo";
import { TodoPresenter } from "#presenters/todo_presenter";
import TodoValidator from "#validators/todo";

@inject()
export default class CreateTodosController {
	constructor(protected presenter: TodoPresenter) {}

	async handle({ request, auth, bouncer }: HttpContext) {
		const currentUser = auth.user!;
		await bouncer.with("TodoPolicy").authorize("create");
		const payload = await request.validateUsing(validator);

		const todo = await Todo.create({
			...payload,
			userId: currentUser.id,
		});

		return this.presenter.toJSON(todo);
	}
}

export const validator = vine.compile(
	vine.object({
		title: TodoValidator.getProperties().title,
	}),
);
