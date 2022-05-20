import { Card } from "../UI/Card";
import { Button } from "../UI/Button";
import classes from "./AddUser.module.css";
import { useState } from "react";

export const AddUser = ({ onAddUser }) => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");

  const addUserHandler = (e) => {
    e.preventDefault();
    console.log("here", e.target.name);

    if (name.trim().length === 0 || age.trim().length === 0) {
      return;
    }

    onAddUser(name, age);

    setAge("");
    setName("");
  };

  const userNameChangeHandler = (e) => {
    console.log(e.target.value);
    setName(e.target.value);
  };
  const ageChangeHandler = (e) => {
    setAge(e.target.value);
  };
  return (
    <Card className={classes.input}>
      <form onSubmit={addUserHandler}>
        <label htmlFor="username">Username</label>
        <input
          onChange={userNameChangeHandler}
          id="username"
          type="text"
          value={name}
        />
        <label htmlFor="age">Age(Years)</label>
        <input onChange={ageChangeHandler} id="age" type="number" value={age} />
        <Button type="submit">Add User</Button>
      </form>
    </Card>
  );
};
