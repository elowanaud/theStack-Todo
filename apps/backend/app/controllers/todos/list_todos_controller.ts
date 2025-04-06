import { inject } from "@adonisjs/core";
import type { HttpContext } from "@adonisjs/core/http";
import vine from "@vinejs/vine";
import Todo from "#models/todo";
import { PaginationPresenter } from "#presenters/pagination_presenter";
import { TodoPresenter } from "#presenters/todo_presenter";
import PaginationValidator from "#validators/pagination";

@inject()
export default class ListTodosController {
	constructor(
		protected presenter: TodoPresenter,
		protected paginationPresenter: PaginationPresenter,
	) {}

	async handle({ request, auth, bouncer }: HttpContext) {
		const currentUser = auth.user!;
		await bouncer.with("TodoPolicy").authorize("list");

		const payload = await request.validateUsing(validator);
		const page = payload.page ?? 1;
		const limit = payload.limit ?? 1000;

		const todos = await Todo.query()
			.where("user_id", currentUser.id)
			.orderBy("created_at", "desc")
			.paginate(page, limit);

		return {
			meta: {
				pagination: this.paginationPresenter.toJSON(todos.getMeta()),
				authorizations: {
					create: await bouncer.with("TodoPolicy").allows("create"),
				},
			},
			todos: todos
				.all()
				.map((todo) => this.presenter.toJSONWithMeta(todo, currentUser)),
		};
	}
}

export const validator = vine.compile(
	vine.object({
		...PaginationValidator.getProperties(),
	}),
);
