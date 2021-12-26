import "./App.css";
import React, { useState } from "react";
import { List } from "./component/List";

const theArray = [
  { name: "CSS", completed: true },
  { name: "JavaScript", completed: true },
  { name: "Learn React", completed: false },
  { name: "Learn mongoDB", completed: false },
  { name: "Learn Node JS", completed: false },
];

function App() {
  const sortedArray = theArray.map((item) => {
    return <List key={item.name} check={item.completed} name={item.name} />;
  });

  return <div>{sortedArray}</div>;
}

export default App;
