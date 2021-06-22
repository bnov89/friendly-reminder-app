import React, { useEffect, useState } from 'react';
import TodoItem, { Item } from '../../TodoItem/Item';

export interface TodoListProps {
  todos: Item[];
}

interface TodoListState {
  todosToShow: Item[];
  title: string
}


class TodoListClassBased extends React.Component<TodoListProps, TodoListState> {
  constructor(props: TodoListProps) {
    super(props);
    this.state = {todosToShow: props.todos, title: 'Default title'};
  }

  render() {
    return (
      <div>
        <h1>{this.state.title}</h1>
        {this.state.todosToShow.map((todoItem) => (
          <TodoItem key={todoItem.title} item={todoItem} />
        ))}
      </div>
    );
  }


  componentDidMount() {
    console.log(
      '[ComponentDidMount] Calling external service (via REST API for example) to get external title...'
    );
    this.setState({...this.state, title: 'External title'})
  }

  componentWillUnmount() {
    console.log("[ComponentWillUnmount] Component will be umounted")
  }

  componentDidUpdate(prevProps: Readonly<TodoListProps>, prevState: Readonly<TodoListState>, snapshot?: any) {
    console.log('[ComponentDidUpdate] useEffect invoked everytime when view is being updated. TODOs:' + JSON.stringify(this.state.todosToShow));
  }
}

export default TodoListClassBased;
