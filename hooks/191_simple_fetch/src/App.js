import api from "./api";
import react, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [data, setData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const getMovie = async () => {
      const movieData = await api.get();
      const title = movieData.data.title;
      const director = movieData.data.director;
      setData([title, director]);
    };
    getMovie();
  }, []);

  const onHandleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const renderData = () => {
    console.log(data);
    return data.map((e) => {
      return <div key={e.name}>{e}</div>;
    });
  };

  return (
    <div>
      {data && renderData()}
      <input type="text" onChange={onHandleSearch} />
    </div>
  );
}

export default App;
