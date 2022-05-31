import useHttp from "./use-http";
import { SyntheticEvent } from "react";

export interface TodoItem {
  id: number,
  description: string;
}

export interface TodoItemList {
  todoItems?: TodoItem[];
}

interface TodoItemListResponse {
  todoItemList: TodoItemList;
}

export interface TodoListProps {
  todos: TodoItem[];
  deleteItem: (event: SyntheticEvent) => void;
}

export interface UseTodoClientReturn {
  getUserTodoList: (applyData: (data: TodoItemListResponse) => void) => void;
}

export interface GetUserTodoListInput {
  getUserTodoList: (applyData: (data: TodoItemListResponse) => void) => void;
}


function useGetTodoList() {
  const httpClient = useHttp();
  const getTodoList = function(applyData: (data: TodoItemListResponse) => void) {
    httpClient.sendRequest<TodoItemListResponse>(
      {
        url: `http://localhost:8080/todos/user/${localStorage.getItem(
          "userAccountNumber"
        )}`,
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`
        }
      },
      applyData
    );
  };
  return { getTodoList };
}

export default useGetTodoList;














































































