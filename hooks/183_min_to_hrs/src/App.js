import "./App.css";
import react, { useState } from "react";

function App() {
  const [sec, setSec] = useState(0);
  const [min, setMin] = useState(0);
  const [hour, setHour] = useState(0);

  const fromSec = (e) => {
    const val = e.target.value;
    setSec(val);
    setHour(val / 3600);
    setMin(val / 60);
    console.log(e.target.value);
  };
  const fromMin = (e) => {
    const val = e.target.value;
    setMin(val);
    setHour(val / 60);
    setSec(val * 60);
    console.log(e.target.value);
  };

  const fromHours = (e) => {
    const val = e.target.value;
    setHour(val);
    setMin(val * 60);
    setSec(val * 3600);
    console.log(e.target.value);
  };

  return (
    <div>
      seconds
      <input type="number" value={sec} onChange={fromSec} />
      minutes
      <input type="number" value={min} onChange={fromMin} />
      hours
      <input type="number" value={hour} onChange={fromHours} />
    </div>
  );
}

export default App;
