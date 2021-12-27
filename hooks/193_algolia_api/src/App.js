import api from "./api";
import react, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [data, setData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [clickTerm, setClickTerm] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const { data } = await api.get("", {
        params: {
          query: searchTerm,
        },
      });
      setData(data.hits);
    };

    getData();
  }, [clickTerm]);

  const onHandleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const onHandleClick = () => {
    const tempVal = searchTerm;
    setClickTerm(tempVal);
  };

  const renderItmes = () => {
    const value = data.map((e) => {
      return (
        <li key={e.objectID}>
          <a href={e.url}>{e.title}</a>
        </li>
      );
    });
    return value;
  };

  return (
    <div>
      <input type="text" value={searchTerm} onChange={onHandleSearch} />
      <button onClick={onHandleClick}>click</button>
      {renderItmes()}
    </div>
  );
}

export default App;
