import { Action, createStore } from 'redux';

export type CounterState = {
  counter: number;
};

export type CounterAction = Action & {
  valueChange: number;
};

const counterReducer = (
  state: CounterState = { counter: 0 },
  action: CounterAction
) => {
  if (action.type === 'increment') {
    return {
      counter: state.counter + action.valueChange,
    };
  }
  if (action.type === 'decrement') {
    return {
      counter: state.counter - action.valueChange,
    };
  }
  return state;
};
const store =
  createStore<CounterState, CounterAction, any, any>(counterReducer);

const counterSubscriber = () => {
  const latestState = store.getState();
  console.log(latestState);
};

store.subscribe(counterSubscriber);

export default store;
