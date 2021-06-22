import React, { useEffect, useState } from 'react';
import TodoItem, { Item } from '../../TodoItem/Item';

export interface TodoListProps {
  todos: Item[];
}

const TodoList: React.FC<TodoListProps> = (props) => {
  const [todosToShow, setTodosToShow] = useState<Item[]>([]);
  const [title, setTitle] = useState<string>('Default title');
  useEffect(() => {
    console.log(
      '[ComponentDidMount] Calling external service (via REST API for example) to get external title...'

    );
    setTitle("External title");
    setTodosToShow(props.todos);
    return () => {
      console.log('[ComponentWillUnmount]Component will be unmounted');
    };
  }, []);

  useEffect(() => {
    console.log(
      '[ComponentDidUpdate] + [ComponentDidMount] useEffect invoked everytime when view is being updated. TODOs:' +
        JSON.stringify(todosToShow)
    );
  });

  return (
    <div>
      <h1>{title}</h1>
      {todosToShow.map((todoItem) => (
        <TodoItem key={todoItem.title} item={todoItem} />
      ))}
    </div>
  );
};

export default TodoList;
