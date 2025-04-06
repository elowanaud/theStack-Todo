import { BasePolicy } from "@adonisjs/bouncer";
import { AuthorizerResponse } from "@adonisjs/bouncer/types";
import Todo from "#models/todo";
import User from "#models/user";

export default class TodoPolicy extends BasePolicy {
	list(): AuthorizerResponse {
		return true;
	}

	create(): AuthorizerResponse {
		return true;
	}

	update(user: User, todo: Todo): AuthorizerResponse {
		return user.id === todo.userId;
	}

	delete(user: User, todo: Todo): AuthorizerResponse {
		return user.id === todo.userId;
	}
}
