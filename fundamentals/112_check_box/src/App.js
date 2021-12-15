import "./App.css";
import React from "react";
import Check from "./components/Check";

class App extends React.Component {
  render() {
    return (
      <div>
        <Check text="not checked" name="name" che={false} />
        <Check text="not checked" name="name" che={false} />
        <Check text="checked" name="name" che={true} />
        <Check text="checked" name="name" che={true} />
      </div>
    );
  }
}

export default App;
