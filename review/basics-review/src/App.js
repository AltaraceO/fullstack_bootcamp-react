import React, { useState } from "react";
import { AddUser } from "./componenets/Users/AddUser";
import { UsersList } from "./componenets/Users/UsersList";

function App() {
  const [usersList, setUsersList] = useState([]);

  const addUserHandler = (name, age) => {
    setUsersList((prevState) => {
      return [...prevState, { name, age, id: Math.random.toString() }];
    });
  };
  return (
    <div>
      <AddUser onAddUser={addUserHandler} />
      <UsersList users={usersList} />
    </div>
  );
}

export default App;
