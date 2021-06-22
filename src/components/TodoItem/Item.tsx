import React from 'react';

export interface Item {
  title: string;
}

export interface TodoItemProps {
  item: Item
}

const TodoItem: React.FC<TodoItemProps> = (props) => {
  return (
    <div>
      <p>{props.item.title}</p>
    </div>
  );
};


export default TodoItem;
