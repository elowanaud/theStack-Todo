import { BaseSchema } from "@adonisjs/lucid/schema";

export default class extends BaseSchema {
	protected tableName = "todos";

	async up() {
		this.schema.createTable(this.tableName, (table) => {
			table.increments("id");
			table
				.integer("user_id")
				.unsigned()
				.references("users.id")
				.onDelete("cascade");
			table.string("title").notNullable();
			table.boolean("completed").notNullable().defaultTo(false);

			table.timestamp("created_at");
			table.timestamp("updated_at");
		});
	}

	async down() {
		this.schema.dropTable(this.tableName);
	}
}
