import vine from "@vinejs/vine";

const PaginationValidator = vine.object({
	page: vine.number().optional(),
	limit: vine.number().optional(),
});

export default PaginationValidator;
