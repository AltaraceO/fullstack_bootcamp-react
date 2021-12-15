import "./App.css";
import Spinner from "./componants /Spinner/Spinner";
import React from "react";

class App extends React.Component {
  state = { spinning: true };

  componentDidMount() {
    console.log(this.state.spinning);
    setTimeout(() => {
      this.setState({ spinning: false }, () => {
        console.log(this.state.spinning);
      });
    }, 3000);
  }

  render() {
    return <div className="x">{this.state.spinning && <Spinner />}</div>;
    // if (x) {
    //   return <div></div>;
    // } else if (y) {
    //   return <div></div>;
    // } else {
    //   return <Spinner />;
    // }
  }
}

export default App;
