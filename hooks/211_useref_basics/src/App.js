import "./App.css";
import { useEffect, useRef, useState } from "react";

function App() {
  const [clicked, setClicked] = useState(false);
  const buttonRef = useRef("edit");
  const inputRef = useRef("");

  const clickHandle = () => {
    setClicked(!clicked);
    if (clicked) {
      buttonRef.current = "edit";
    } else {
      buttonRef.current = "save";
    }
  };

  console.log(buttonRef.current);
  return (
    <div>
      {clicked && <input ref={inputRef} />}
      <button onClick={clickHandle}>{buttonRef.current}</button>
    </div>
  );
}

export default App;
