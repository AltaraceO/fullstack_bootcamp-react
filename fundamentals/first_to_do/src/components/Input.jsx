import React, { Component } from "react";

class AddItem extends Component {
  state = { value: "" };

  handleOnChange = (e) => {
    this.setState({ value: e.target.value });
  };

  onClickHandle = () => {
    if (this.state.value.length) {
      this.props.func(this.state.value);
      this.setState({ value: "" });
    }
  };
  render() {
    return (
      <div>
        <input
          onChange={this.handleOnChange}
          type="text"
          value={this.state.value}
        />
        <button onClick={this.onClickHandle}>Add item to do</button>
      </div>
    );
  }
}
export default AddItem;
