import React, { SyntheticEvent, useEffect, useState } from "react";
import useHttp from "../../../hooks/use-http";
import { Box, List, ListItem, ListItemText } from "@mui/material";
import TodoList from "./TodoList";


interface TodoItemList {
  todoItems?: TodoItem[];
}

interface TodoItemListResponse {
  todoItemList: TodoItemList;
}

interface TodoItem {
  description: string;
}

const TodoLists: React.FC = () => {
  let httpClient = useHttp();
  const [todoItemList, setTodoItemList] = useState<TodoItemList>();

  useEffect(() => {
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
      (data) => {
        setTodoItemList(data.todoItemList);
      }
    );
  }, []);

  const saveTodoList = (event: SyntheticEvent) => {
  };
  console.log("TODO list:" + JSON.stringify(todoItemList));
  console.log("TODO list:" + JSON.stringify(todoItemList?.todoItems));
  let itemsListView = null;
  if (todoItemList) {
    itemsListView = <TodoList todos={todoItemList.todoItems.map(value => value.description)}/>
  } else {
    itemsListView = <div>This is empty and {JSON.stringify(todoItemList)}</div>;
  }
  console.log(itemsListView);
  return (<Box sx={{ textAlign: "center" }}>
    {itemsListView}
  </Box>);
};

export default TodoLists;
