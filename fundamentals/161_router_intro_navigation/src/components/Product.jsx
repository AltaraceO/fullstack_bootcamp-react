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

  handleClick = () => {
    console.log(this.props.history);
    this.props.history.push("/home");
    // this.props.history.goBack();
  };

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
            <br />
            <button onClick={this.handleClick}>Back</button>
          </div>
        )}
      </div>
    );
  }
}

export default Product;
