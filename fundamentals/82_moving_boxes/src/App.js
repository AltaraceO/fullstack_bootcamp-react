import "./App.css";
import React from "react";

class App extends React.Component {
  state = { class: "" };

  componentDidMount() {
    setTimeout(() => {
      this.setState({ class: "boxes" });
    }, 1000);
  }

  componentDidUpdate() {
    setTimeout(() => {
      this.setState({ class: "" });
    }, 2000);
  }

  render() {
    return (
      <div className="container ">
        <div
          className={this.state.class}
          style={{ width: "100px", height: "30px" }}
        ></div>

        <div
          className={this.state.class}
          style={{ width: "50px", height: "30px" }}
        ></div>

        <div
          className={this.state.class}
          style={{ width: "20px", height: "30px" }}
        ></div>
      </div>
    );
  }
}

export default App;
