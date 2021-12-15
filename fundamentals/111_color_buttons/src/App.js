import React from "react";
import "./App.css";
import Buttons from "./components/Buttons";

class App extends React.Component {
  state = { color: " ", colorArr: ["green", "blue", "red"] };

  makeButtons = () => {
    return this.state.colorArr.map((color) => {
      return <Buttons style={color} func={this.onHandleChange} />;
    });
  };

  onHandleChange = (color) => {
    // console.log(e);
    this.setState({ color: color });
    return <div>{this.state.color}</div>;
  };

  render() {
    return (
      <div>
        <div>{this.makeButtons()}</div>
        <div>{this.state.color}</div>
      </div>
    );
  }
}

export default App;
