import React from "react";
import "./App.css";

class App extends React.Component {
  state = { value: "", counter: 0 };

  componentDidMount() {
    setInterval(() => {
      let randomColor = Math.floor(Math.random() * 16777215).toString(16);
      this.setState({ value: randomColor, counter: this.state.counter + 1 });

      console.log(this.state.counter);
    }, 1000);
  }

  compo;
  componentWillUnmount() {}

  render() {
    return (
      <div>
        <div
          className="box"
          style={{ backgroundColor: `#${this.state.value}` }}
        ></div>
      </div>
    );
  }
}

export default App;
