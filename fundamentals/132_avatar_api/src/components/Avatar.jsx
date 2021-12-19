import React from "react";
import "./Avatar.css";

class Avatar extends React.Component {
  showCards = () => {
    const peopleArr = this.props.people;
    console.log(peopleArr);
    return peopleArr.map((person, i) => {
      return (
        <div className="card" key={i}>
          <div>{person.name}</div>
          <img src={`${person.picture}`} alt="text" />
        </div>
      );
    });
  };

  render() {
    return (
      <div>{<div className="card-container">{this.showCards()}</div>}</div>
    );
  }
}

export default Avatar;
