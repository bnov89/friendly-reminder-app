import React, { useEffect, useState } from "react";
import { List, ListItem, ListItemText } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import { GetServerSideProps } from "next";

import useGetTodoList, { TodoItem, TodoListProps } from "../../hooks/http/use-get-todo-list";


const TodoList: React.FC<TodoListProps> = (props) => {
  const { getTodoList } = useGetTodoList();
  const [todoItemList, setTodoItemList] = useState<TodoItem[]>([]);
  useEffect(() => {
    getTodoList((data) => {
      const result: TodoItem[] = data.todoItemList.todoItems.map((value, index) => {
        return { id: index, description: value.description };
      });
      setTodoItemList(result);
    });
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
        <ListItemText primary={value.description} />
      </ListItem>

    );
  });
  return (
    <React.Fragment>
      <p>TODO items</p>
      <List>{todos}</List>
    </React.Fragment>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  return { props: {} };
};

export default TodoList;
