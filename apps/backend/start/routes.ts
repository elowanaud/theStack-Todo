import router from "@adonisjs/core/services/router";
import { middleware } from "#start/kernel";

// Auth
router
	.group(() => {
		router.get("/me", "#controllers/auth/me_controller");

		router
			.group(() => {
				router.post("/login", "#controllers/auth/login_controller");
				router.post("/register", "#controllers/auth/register_controller");
				router.post(
					"/forgot-password",
					"#controllers/auth/forgot_password_controller",
				);
				router.post(
					"/reset-password",
					"#controllers/auth/reset_password_controller",
				);
			})
			.use(middleware.guest());

		router
			.delete("/logout", "#controllers/auth/logout_controller")
			.use(middleware.auth());
	})
	.prefix("/auth");

// Todos
router
	.group(() => {
		router.get("/todos", "#controllers/todos/list_todos_controller");
		router.post("/todos", "#controllers/todos/create_todos_controller");
		router.put("/todos/:id", "#controllers/todos/update_todos_controller");
		router.delete("/todos/:id", "#controllers/todos/delete_todos_controller");
	})
	.use(middleware.auth());
