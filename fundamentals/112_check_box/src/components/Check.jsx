import React from "react";

class Check extends React.Component {
  render() {
    return (
      <div>
        <label htmlFor={this.props.name}>
          <input
            type="checkbox"
            name={this.props.name}
            defaultChecked={this.props.che}
          />
          {this.props.text}
        </label>
      </div>
    );
  }
}

export default Check;
