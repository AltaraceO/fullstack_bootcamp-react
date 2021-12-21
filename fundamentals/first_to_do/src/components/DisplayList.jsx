import React, { Component } from "react";

class DisplayList extends Component {
  createList = () => {
    const list = this.props.todos;
    return list.map((thing) => {
      return (
        <div key={thing.id}>
          <span>{thing.thing}</span>
          <button onClick={this.props.removeFunc} id={thing.id}>
            done!
          </button>
        </div>
      );
    });
  };
  render() {
    return <div>{this.createList()}</div>;
  }
}
export default DisplayList;
