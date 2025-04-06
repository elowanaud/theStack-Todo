import factory from "@adonisjs/lucid/factories";
import { TodoFactory } from "#database/factories/todo_factory";
import User from "#models/user";

export const UserFactory = factory
	.define(User, ({ faker }) => {
		return {
			email: faker.internet.email(),
			password: faker.internet.password(),
		};
	})
	.relation("todos", () => TodoFactory)
	.build();
