// Action creator

export const selectBook = (book) => {
  //return a book
  return {
    type: "BOOK_SELECTED",
    payload: book,
  };
};
