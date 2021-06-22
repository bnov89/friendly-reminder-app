import React, { FormEvent, useEffect, useState } from 'react';
import { TextField } from '@material-ui/core';
import { Item } from '../TodoItem/Item';

export interface NewTodoItemProps {
  onSaveNewItem: (item: Item) => void;
}

const NewTodoItem: React.FC<NewTodoItemProps> = (props) => {
  const [newItem, setNewItem] = useState<Item>({
    title: 'Internal default value',
  });

  function addNewTodoItem(event: FormEvent) {
    event.preventDefault();
    props.onSaveNewItem(newItem);
  }

  return (
    <div>
      <form onSubmit={addNewTodoItem}>
        <TextField
          id="new-todo-item-title"
          defaultValue={newItem.title}
          onChange={(event) => {
            let value = event.target.value;
            setNewItem((prevState) => {
              return { ...prevState, title: value };
            });
          }}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default NewTodoItem;
