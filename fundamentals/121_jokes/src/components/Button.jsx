import React from "react";

class Button extends React.Component {
  render() {
    return (
      <div>
        <button onClick={() => this.props.func()}>Click to read a joke</button>
      </div>
    );
  }
}

export default Button;
