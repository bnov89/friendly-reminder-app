import React, { SyntheticEvent, useEffect, useState } from "react";
import useHttp from "../../../hooks/use-http";
import { Box, Button, List, ListItem, ListItemText } from "@mui/material";
import TodoList from "./TodoList";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";


export interface TodoItemList {
  todoItems?: TodoItem[];
}

interface TodoItemListResponse {
  todoItemList: TodoItemList;
}

export interface TodoItem {
  id: number,
  description: string;
}

const TodoLists: React.FC = () => {
  let httpClient = useHttp();
  const [todoItemList, setTodoItemList] = useState<TodoItem[]>();
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
      console.log("Wywolane")
        const result: TodoItem[] = data.todoItemList.todoItems.map((value, index) => {return {id: index,  description: value.description}})
        // const todoItemListResult: TodoItemList = {todoItems: result}
        setTodoItemList(result);
      }
    );
  }, []);

  const saveTodoList = (event: SyntheticEvent) => {
  };
  console.log(JSON.stringify(todoItemList))
  let itemsListView = null;
  if (todoItemList) {
    itemsListView = (<><List>
      {todoItemList.map((value) => (<ListItem
        key={value.id}
        secondaryAction={
          <IconButton
            edge="end"
            aria-label="comments"
            onClick={() => {
              const copyy: TodoItem[] = [...todoItemList]
              copyy.splice(value.id, 1);
              setTodoItemList(copyy)}}
          >
            <DeleteIcon />
          </IconButton>
        }
      >
        <ListItemText primary={value.description}/>
      </ListItem>))}

    </List></>)
  } else {
    itemsListView = <div>This is empty and {JSON.stringify(todoItemList)}</div>;
  }
  return (<Box sx={{ textAlign: "center" }}>
    {itemsListView}
    <form>
    <Button variant="contained">Add</Button>
    </form>
    </Box>);
};

export default TodoLists;
