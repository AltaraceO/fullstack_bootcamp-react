import "./App.css";
import React from "react";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      counter: 0,
      color: "black",
    };
    this.add = this.add.bind(this);
    this.subtract = this.subtract.bind(this);
  }

  add() {
    console.log("add");
    let stateCount = this.state.counter;
    if (stateCount < 10) {
      stateCount = stateCount + 2;
      this.setState({ counter: stateCount });
      console.log(this.state.counter);
    }
  }
  subtract() {
    console.log("sub");

    let stateCount = this.state.counter;
    if (stateCount > -10) {
      stateCount = stateCount - 2;
      this.setState({ counter: stateCount });
      console.log(this.state.counter);
    }
  }

  render() {
    return (
      <div>
        <button onClick={this.subtract}>-</button>
        <div className="counter">{this.state.counter}</div>
        <button onClick={this.add}>+</button>
      </div>
    );
  }
}

export default App;
