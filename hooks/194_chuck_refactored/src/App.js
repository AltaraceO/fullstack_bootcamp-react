import "./App.css";
import { useState, useEffect } from "react";
import api from "./api";
import { Categories } from "./Categories";

function App() {
  const [joke, setJoke] = useState("");
  const [list, setList] = useState(null);
  const [cat, setCat] = useState("");

  const clickResult = async () => {
    const result = await api.get("random");

    setJoke(result.data.value);
  };

  const catClick = async (cat) => {
    const result = await api.get("random", {
      params: {
        category: cat,
      },
    });

    setCat(result.data.value);
  };

  useEffect(() => {
    const catClick = async () => {
      const result = await api.get("categories");

      setList(result.data);
    };
    catClick();
  }, []);

  return (
    <div>
      <button onClick={clickResult}>Click for a random Joke</button>
      {joke ? <span>{joke}</span> : ""}
      <Categories list={list} func={catClick} />
      {cat}
    </div>
  );
}

export default App;
