import React from "react";
import { AddUser } from "./componenets/Users/AddUser";
import { UsersList } from "./componenets/Users/UsersList";

function App() {
  return (
    <div>
      <AddUser />
      <UsersList users={[]} />
    </div>
  );
}

export default App;
