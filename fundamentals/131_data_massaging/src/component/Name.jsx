import React from "react";

class Name extends React.Component {
  getName = () => {
    console.log(this.props.names);
    const people = this.props.names;

    return people.map((person, i) => {
      return <div key={i}>{person.name}</div>;
    });
  };
  render() {
    return <div>{this.getName()}</div>;
  }
}

export default Name;
