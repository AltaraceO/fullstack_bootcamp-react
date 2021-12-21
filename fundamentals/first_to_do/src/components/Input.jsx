import React, { Component } from "react";

class AddItem extends Component {
  state = { value: "" };

  handleOnChange = (e) => {
    // console.log(e.target.value);
    this.setState({ value: e.target.value });
  };

  onClickHandle = () => {
    this.props.func(this.state.value);
    this.setState({ value: "" });
  };
  render() {
    return (
      <div>
        <input onChange={this.handleOnChange} type="text" />
        <button onClick={this.onClickHandle}>Add item</button>
      </div>
    );
  }
}
export default AddItem;
