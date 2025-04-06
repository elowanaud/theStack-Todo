import { SimplePaginator } from "@adonisjs/lucid/database";

export class PaginationPresenter {
	toJSON(pagination: SimplePaginator) {
		return {
			currentPage: pagination.currentPage,
			perPage: pagination.perPage,
			total: pagination.total,
		};
	}
}
