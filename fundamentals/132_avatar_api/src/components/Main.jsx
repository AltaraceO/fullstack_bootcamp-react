import React from "react";
import axios from "axios";
import Avatar from "./Avatar";
import Input from "./Input";

class Main extends React.Component {
  state = { person: "" };

  async componentDidMount() {
    const { data } = await axios.get("https://randomuser.me/api/?results=40");

    const { results } = data;
    let newArr = [];

    results.forEach((person) => {
      newArr.push({
        name: `${person.name.first} ${person.name.last}`,
        picture: person.picture.medium,
      });
    });

    this.setState({ person: newArr });
  }

  filter = () => {};
  render() {
    console.log(this.state.person);
    return (
      <div>
        <Input />
        <div>{this.state.person && <Avatar people={this.state.person} />}</div>
      </div>
    );
  }
}

export default Main;
