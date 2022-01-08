import React from "react";
import { connect } from "react-redux";

const SongDetail = ({ favBook }) => {
  if (!favBook) {
    return <div>Please select a book</div>;
  }
  return (
    <div>
      <h3>Details for:</h3>
      <p></p>
      Title: {favBook.title}
      <br />
      Author: {favBook.author}
    </div>
  );
};

const mapStateToProps = (state) => {
  return { favBook: state.selectedBook };
};

export default connect(mapStateToProps)(SongDetail);
