import { useApi } from "@/lib/api/client";
import type {
	InferErrorType,
	InferRequestType,
	InferResponseType,
} from "@tuyau/client";

const getTodos = useApi.todos.$get;
export type getTodosProps = InferRequestType<typeof getTodos>;
export type getTodosResponse = InferResponseType<typeof getTodos>;
export type getTodosError = InferErrorType<typeof getTodos>;

const createTodo = useApi.todos.$post;
export type createTodoProps = InferRequestType<typeof createTodo>;
export type createTodoResponse = InferResponseType<typeof createTodo>;
export type createTodoError = InferErrorType<typeof createTodo>;

const updateTodo = useApi.todos({ id: 1 }).$put;
export type updateTodoProps = InferRequestType<typeof updateTodo>;
export type updateTodoResponse = InferResponseType<typeof updateTodo>;
export type updateTodoError = InferErrorType<typeof updateTodo>;

const deleteTodo = useApi.todos({ id: 1 }).$delete;
export type deleteTodoProps = InferRequestType<typeof deleteTodo>;
export type deleteTodoResponse = InferResponseType<typeof deleteTodo>;
export type deleteTodoError = InferErrorType<typeof deleteTodo>;
