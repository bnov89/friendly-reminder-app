import { Action, createStore } from 'redux';

export type CounterState = {
  counter: number;
};

export type CounterAction = Action & {
  valueChange: number;
};

// REDUCER
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

// STORE
const store =
  createStore<CounterState, CounterAction, any, any>(counterReducer);

// SUBSCRIBER
const counterSubscriber = () => {
  const latestState = store.getState();
  console.log(latestState);
};

store.subscribe(counterSubscriber);

export default store;
