import "./App.css";
import { useState } from "react";
import blk from "./spooky/blk.jpg";
import room from "./spooky/creepy.jpeg";

function App() {
  const [image, setImage] = useState(blk);

  const changeImg = () => {
    setImage(room);
  };

  const returnImg = () => {
    setImage(blk);
  };

  return (
    <div>
      <img
        src={image}
        alt="text"
        onMouseEnter={changeImg}
        onMouseLeave={returnImg}
      />
    </div>
  );
}

export default App;
