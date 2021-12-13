import React from "react";
import Caption from "./Caption";
import Image from "./Image";
import Links from "./Links";
import Title from "./Title";

class CardMain extends React.Component {
  render() {
    return (
      <div className="main-card">
        <Image image={this.props.image} />
        <div>
          <Title text={this.props.heading} />
          <Caption text={this.props.captions} />
        </div>
        <br />
        <br />
        <Links linktext={this.props.linktext} />{" "}
        <Links linktext={this.props.linktext} />
      </div>
    );
  }
}

export default CardMain;
