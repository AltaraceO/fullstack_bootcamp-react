import React from "react";
import store from "../store";

class Product extends React.Component {
  state = { items: "", currItem: "" };

  componentDidMount() {
    const itemId = Number(this.props.match.params.id);

    const findItem = store.find((item) => {
      return item.id === itemId;
    });
    this.setState({ currItem: findItem });
  }

  render() {
    return (
      <div>
        {this.state.currItem && (
          <div>
            {this.state.currItem.title}
            <br />
            {this.state.currItem.size}- ${this.state.currItem.price}
            <br />
            <img
              style={{ width: "100px" }}
              src={this.state.currItem.imageUrl}
              alt="img"
            />
          </div>
        )}
      </div>
    );
  }
}

export default Product;
