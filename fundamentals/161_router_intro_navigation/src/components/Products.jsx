import React from "react";
import { Link } from "react-router-dom";
import store from "../store";

class Products extends React.Component {
  state = { item: [] };

  componentDidMount() {
    this.setState({
      item: store.map((item) => {
        return (
          <Link
            key={item.id}
            to={`/product/${item.id}`}
          >{` ${item.title} `}</Link>
        );
      }),
    });
  }
  render() {
    return (
      <div>
        <br />
        {this.state.item} <br />
      </div>
    );
  }
}

export default Products;
