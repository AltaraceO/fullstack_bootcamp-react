import { useState } from "react";
import "./App.css";
import { ApiComp } from "./ApiComp";

function App() {
  const [display, setDisplay] = useState(false);

  const onClickHandle = () => {
    setDisplay(!display);
  };
  return (
    <div>
      <button onClick={onClickHandle}>Click to Display</button>
      {display && <ApiComp />}
    </div>
  );
}

export default App;
