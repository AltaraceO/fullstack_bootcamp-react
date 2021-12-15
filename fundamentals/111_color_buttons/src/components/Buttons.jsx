import React from "react";

class Buttons extends React.Component {
  state = { value: this.props.style };

  onButtonClick = () => {
    this.props.func(this.state.value);
  };

  render() {
    return (
      <div>
        <button
          style={{
            background: this.props.style,
            height: "30px",
            width: "50px",
            margin: "10px 0",
          }}
          onClick={this.onButtonClick}
        >
          {this.props.style}
        </button>
      </div>
    );
  }
}

export default Buttons;
