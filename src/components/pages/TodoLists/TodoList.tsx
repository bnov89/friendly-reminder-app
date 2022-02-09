import React, { SyntheticEvent } from "react";
import { List, ListItem, ListItemText } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import { TodoItem } from "./TodoLists";

export interface TodoListProps {
  todos: TodoItem[];
  deleteItem: (event: SyntheticEvent) => void
}

const TodoList: React.FC<TodoListProps> = (props) => {
  const todos = props.todos.map((value, index) => {
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
        <ListItemText primary={value}/>
      </ListItem>
    );
  });
  return <List>{todos}</List>;
};

export default TodoList;
