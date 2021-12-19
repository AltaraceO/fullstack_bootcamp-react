import "./App.css";
import React from "react";
import data from "./data";
import Name from "./component/Name";
import Card from "./component/Card";

class App extends React.Component {
  state = { values: null, pre90s: [] };

  getData = () => {
    const newData = data;

    return newData.map((person, i) => {
      return <div key={i}>{person.name}</div>;
    });
  };

  //   Create a function that returns all the objects that are born
  // before 1990

  componentDidMount() {
    const newData = data;

    const age = newData.filter((person) => {
      if (person.birthday.slice(-2, -1) < "9") {
        return person;
      }
    });

    this.setState({ pre90s: age });
    console.log(age);
  }

  render() {
    return (
      <div>
        {/* {this.getData()} */}
        <div>
          {/* <Name names={this.state.pre90s} /> */}
          <Card names={this.state.pre90s} />
        </div>
      </div>
    );
  }
}

export default App;
