import "./App.css";
import { v4 as uuidv4 } from "uuid";
import React from "react";
import Input from "./components/Input";
import DisplayList from "./components/DisplayList";

class App extends React.Component {
  state = {
    todos: [],
  };

  onInputChange = (value) => {
    const id = uuidv4();
    const newItem = {
      id: id,
      thing: value,
    };
    this.setState({ todos: [...this.state.todos, newItem] });
  };

  removeDone = (e) => {
    const id = e.target.id;
    const filteredOut = this.state.todos.filter((item) => {
      return item.id !== id;
    });
    this.setState({ todos: filteredOut });
  };

  render() {
    return (
      <div>
        <Input func={this.onInputChange} />

        <DisplayList todos={this.state.todos} removeFunc={this.removeDone} />
      </div>
    );
  }
}

export default App;
