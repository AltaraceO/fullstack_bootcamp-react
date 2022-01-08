import { combineReducers } from "redux";

const bookReducer = () => {
  return [
    { title: `I'll be gone in the dark`, author: "Michelle McNamera" },
    { title: `Forest City Killer`, author: "Vanessa Brown" },
    { title: `The Man from the Train`, author: "Bill James" },
    { title: `The Killer Across The Table `, author: "John E. Douglass" },
  ];
};

const selectedBookReducer = (selectedBook = null, action) => {
  if (action.type === "BOOK_SELECTED") {
    return action.payload;
  }

  return selectedBook;
};

export default combineReducers({
  books: bookReducer,
  selectedBook: selectedBookReducer,
});
