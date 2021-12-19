import React from "react";

class Card extends React.Component {
  getName = () => {
    const people = this.props.names;

    return people.map((person, i) => {
      return (
        <div key={i}>
          <div>{person.name}</div>
          <div>{person.birthday}</div>
          <div>{person.favoriteFoods.meats.join(" ")} </div>
          <div>{person.favoriteFoods.fish.join(" ")} </div>
          <br />
        </div>
      );
    });
  };

  render() {
    return (
      <div>
        <div>{this.getName()}</div>
      </div>
    );
  }
}

export default Card;
