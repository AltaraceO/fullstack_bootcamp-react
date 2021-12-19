import React from "react";
import "./Avatar.css";

class Input extends React.Component {
  state = { typed: "" };
  handleChange = (e) => {
    e.preventDefault();
    console.log(e.target.value);
    this.setState({ typed: e.target.value });
  };
  render() {
    return (
      <div className="input">
        <input onChange={this.handleChange} type="text" />
      </div>
    );
  }
}

export default Input;
