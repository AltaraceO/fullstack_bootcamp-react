import React from "react";

class Categories extends React.Component {
  makeList = () => {
    const list = this.props.list;
    return list.map((el, i) => {
      return (
        <button key={i} onClick={() => this.props.func(el)}>
          {el}
        </button>
      );
    });
  };
  render() {
    return <div>{this.makeList()}</div>;
  }
}

export default Categories;
