import api from "./api";
import react, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [data, setData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const getCountries = async () => {
      const { data } = await api.get();
      setData(data);
    };
    getCountries();
  }, []);

  const onHandleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const renderData = (e) => {
    const tempArr = data.filter((e) => {
      return e.name.toLowerCase().includes(searchTerm);
    });
    return tempArr.map((e) => {
      return <div key={e.alpha2Code}>{e.name}</div>;
    });
  };

  return (
    <div>
      <input type="text" value={searchTerm} onChange={onHandleSearch} />

      {data ? renderData() : "Loading..."}
    </div>
  );
}

export default App;
