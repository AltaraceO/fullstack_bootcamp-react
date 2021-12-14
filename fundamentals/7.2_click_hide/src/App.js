import "./App.css";
import React from "react";

class App extends React.Component {
  state = { value: true };

  showClick = () => {
    this.setState({ value: !this.state.value });
  };

  render() {
    return (
      <div>
        <button onClick={this.showClick}>box</button>
        {this.state.value ? (
          <div className="yellow-box">yellow</div>
        ) : (
          console.log("off")
        )}
      </div>
    );
  }
}

export default App;
