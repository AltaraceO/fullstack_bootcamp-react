import "./App.css";
import react, { useState } from "react";
import { List } from "./component/List";

const arr = ["one", "two", "three", "four", "five"];
const newDeleteArr = [];
function App() {
  const [newStt, setNewStt] = useState(arr);

  const deleteChecked = () => {
    let difference = newStt.filter((item) => !newDeleteArr.includes(item));
    console.log(difference);
    setNewStt(difference);
  };

  const removeItme = (name) => {
    newDeleteArr.push(name);
  };

  const these = newStt.map((item, idx) => {
    return <List key={idx} idx={idx} name={item} func={removeItme} />;
  });

  const newRestore = () => {
    setNewStt(arr);
  };

  return (
    <div>
      {these}
      <div>
        <button onClick={deleteChecked}>delete</button>
        <button onClick={newRestore}>restore</button>
      </div>
    </div>
  );
}

export default App;
