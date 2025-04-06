import vine from "@vinejs/vine";

const TodoValidator = vine.object({
	title: vine.string().trim().minLength(1).maxLength(255),
	completed: vine.boolean(),
});

export default TodoValidator;
