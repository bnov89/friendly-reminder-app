import React, { SyntheticEvent, useEffect, useState } from "react";
import { List, ListItem, ListItemText } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import { GetServerSideProps } from "next";

import useHttp from "../../hooks/use-http";
import { TodoItem } from "../todo-list";

export interface TodoItemList {
  todoItems?: TodoItem[];
}
interface TodoItemListResponse {
  todoItemList: TodoItemList;
}
export interface TodoListProps {
  todos: TodoItem[];
  deleteItem: (event: SyntheticEvent) => void
}

const TodoList: React.FC<TodoListProps> = (props) => {
  let httpClient = useHttp();
  const [todoItemList, setTodoItemList] = useState<TodoItem[]>([]);
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
        console.log(data.todoItemList.todoItems)
        const result: TodoItem[] = data.todoItemList.todoItems.map((value, index) => {return {id: index,  description: value.description}})
        // const todoItemListResult: TodoItemList = {todoItems: result}
        setTodoItemList(result);
      }
    );
  }, []);

  const todos = todoItemList.map((value, index) => {
    return (
      <ListItem
        key={index}
        secondaryAction={
          <IconButton
            edge="end"
            aria-label="comments"
            onClick={props.deleteItem}
          >
            <DeleteIcon />
          </IconButton>
        }
      >
        <ListItemText primary={value.description}/>
      </ListItem>
    );
  });
  return <List>{todos}</List>;
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  return { props: {} };
};

export default TodoList;
