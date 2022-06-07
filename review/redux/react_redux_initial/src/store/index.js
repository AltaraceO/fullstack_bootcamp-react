import { createStore } from "redux";

//*action is an object
const counterReducers = (state = { counter: 0 }, action) => {
  if ((action.type = "increment")) {
    return {
      counter: state.counter + 1,
    };
  }
  if ((action.type = "decrement")) {
    return {
      counter: state.counter - 1,
    };
  }

  return state;
};

const store = createStore(counterReducers);

export default store;
// store.dispatch({type:'increment'})
// store.dispatch({type:'decrement'})
