import React from "react";

class Image extends React.Component {
  render() {
    return (
      <a href="/" className="image">
        <img alt="picture" className="picture" src={this.props.image} />
      </a>
    );
  }
}

export default Image;
