import React from 'react';
import { List, ListItem, ListItemText } from '@mui/material';

export interface TodoListProps {
  todos: string[];
}

const TodoList: React.FC<TodoListProps> = (props) => {
  const todos = props.todos.map((value, index) => {
    return (<ListItem key={index}>
      <ListItemText primary="asdsdfewfzfs">sdfsdfewfsdfsdf</ListItemText>
    </ListItem>);
  });
  return <List>{todos}</List>;
};

export default TodoList;
