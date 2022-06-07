const redux = require("redux");

//* 2 params! the OLD STATE and the ACTION (str)
//* RETURNS a NEW state OBJECT
//*State gets an initial value by DEFAULT =
const counterReducer = (state = { counter: 0 }, action) => {
  if (action.type === "increment") {
    return {
      counter: state.counter + 1,
    };
  }
  if (action.type === "decrement") {
    return {
      counter: state.counter - 1,
    };
  }

  return state;
};

//*initial store creation! FIRST
//* hand it the REDUCER function that was created above

const store = redux.createStore(counterReducer);

// console.log(store.getState());

//*The subscriber calls getState and give th latest state snapshot after update
const counterSubscriber = () => {
  const latestState = store.getState();

  console.log(latestState);
};

//*the SUBSCRIBE method gets the above subscriber FUNCTION that will getState
//* REDUX will execute this function whenever the store data changes!
store.subscribe(counterSubscriber);

//*dispatch is a JS object with a TYPE property - ACTION name basically
store.dispatch({ type: "increment" });
store.dispatch({ type: "decrement" });
