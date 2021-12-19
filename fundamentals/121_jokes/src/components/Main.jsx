import React from "react";
import axios from "axios";
import Button from "./Button";
import Categories from "./Categories";

class Main extends React.Component {
  state = { joke: "", list: null, cat: "" };

  onClick = async () => {
    const result = await axios.get("https://api.chucknorris.io/jokes/random");

    const joke = result.data.value;

    this.setState({ joke: joke });
  };

  onCategoryClick = async (cat) => {
    const result = await axios.get(
      `https://api.chucknorris.io/jokes/random?category=${cat}`
    );

    const resJoke = result.data.value;

    this.setState({ cat: resJoke });
  };

  async componentDidMount() {
    const { data } = await axios.get(
      "https://api.chucknorris.io/jokes/categories"
    );

    this.setState({ list: data });
  }

  render() {
    return (
      <div>
        <Button func={this.onClick} />
        {this.state.joke}
        {this.state.list && (
          <Categories list={this.state.list} func={this.onCategoryClick} />
        )}
        {this.state.cat}
      </div>
    );
  }
}

export default Main;
