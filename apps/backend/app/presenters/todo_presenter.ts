import { inject } from "@adonisjs/core";
import type Todo from "#models/todo";
import type User from "#models/user";
import TodoPolicy from "#policies/todo_policy";

@inject()
export class TodoPresenter {
	constructor(private TodoPolicy: TodoPolicy) {}

	toJSON(todo: Todo) {
		return {
			id: todo.id,
			title: todo.title,
			completed: todo.completed,
			createdAt: todo.createdAt.toJSDate(),
			updatedAt: todo.updatedAt?.toJSDate(),
		};
	}

	toJSONWithMeta(todo: Todo, user: User) {
		return {
			id: todo.id,
			title: todo.title,
			completed: todo.completed,
			createdAt: todo.createdAt.toJSDate(),
			updatedAt: todo.updatedAt?.toJSDate(),
			meta: {
				authorizations: {
					update: this.TodoPolicy.update(user, todo) as boolean,
					delete: this.TodoPolicy.delete(user, todo) as boolean,
				},
			},
		};
	}
}
