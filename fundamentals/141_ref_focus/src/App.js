import React, { Component } from "react";

export default class App extends Component {
  state = { value: "" };
  inputRef = React.createRef();
  textRef = React.createRef();

  componentDidMount() {
    this.inputRef.current.focus();
  }

  clickCopy = (text) => {
    this.textRef.current.select();
    document.execCommand("copy");
  };

  render() {
    return (
      <div>
        <input type="text" ref={this.inputRef} />

        <br />
        <br />
        <textarea ref={this.textRef} name="text" cols="30" rows="10"></textarea>
        <br />
        <br />
        <button onClick={this.clickCopy}>click to copy</button>
      </div>
    );
  }
}
