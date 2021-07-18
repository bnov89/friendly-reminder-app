import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { CounterAction, CounterState } from '../../store/ReduxStore';

const Counter: React.FC = () => {
  let dispatch = useDispatch();
  let counter = useSelector<CounterState>((state) => state.counter);

  const incrementHandler = () => {
    dispatch<CounterAction>({ type: 'increment', valueChange: 5 });
  };

  const decrementHandler = () => {
    dispatch<CounterAction>({ type: 'decrement', valueChange: 3 });
  };

  return (
    <div>
      <div className="counter">{counter}</div>
      <button onClick={incrementHandler}>Increment</button>
      <button onClick={decrementHandler}>Decrement</button>
    </div>
  );
};

export default Counter;
