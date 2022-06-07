const redux = require("redux");

const counterReducer = (state = { counter: 0 }, action) => {
  return {
    counter: state.counter + 1,
  };
};

//*initial store creation! FIRST
//* hand it the REDUCER function that was created above

const store = redux.createStore(counterReducer);

console.log(store.getState());

const counterSubscriber = () => {
  const latestState = store.getState();

  console.log(latestState);
};

store.subscribe(counterSubscriber);

//dispatch is a JS object with a TYPE property
store.dispatch({ type: "increment" });
