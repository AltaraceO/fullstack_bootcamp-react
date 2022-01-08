import { clear } from "@testing-library/user-event/dist/clear";
import React, { Component } from "react";
import { connect } from "react-redux";
import { selectBook } from "../actions";

class SongList extends Component {
  renderList() {
    let counter = 0;
    return this.props.books.map((book) => {
      return (
        <div className="item" key={counter++}>
          <div className="right floated content">
            <button
              onClick={() => this.props.selectBook(book)}
              className="ui button basic"
            >
              select
            </button>
          </div>
          <div className="content">{book.title} </div>
        </div>
      );
    });
  }
  render() {
    console.log(this.props);
    return <div className="ui divided list">{this.renderList()}</div>;
  }
}

const mapStateToProps = (state) => {
  console.clear();
  console.log(state);
  return { books: state.books };
};

export default connect(mapStateToProps, { selectBook: selectBook })(SongList);
