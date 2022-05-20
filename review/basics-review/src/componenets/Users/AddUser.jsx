import { Card } from "../UI/Card";
import { Button } from "../UI/Button";
import classes from "./AddUser.module.css";
import { useState, useRef } from "react";
import { ErrorModal } from "../UI/ErrorModal";

export const AddUser = ({ onAddUser }) => {
  const nameRef = useRef();
  const ageRef = useRef();

  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [error, setError] = useState();

  const addUserHandler = (e) => {
    e.preventDefault();
    console.log("refs", nameRef, ageRef);

    if (name.trim().length === 0 || age.trim().length === 0) {
      setError({
        title: "Type Something!",
        message: "You need to type something",
      });
      return;
    }

    if (+age < 1) {
      setError({
        title: "Age is too small",
        message: "You need to be older than one",
      });
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

  const errorHandler = () => {
    setError(null);
  };
  return (
    <div>
      {error && (
        <ErrorModal
          onConfirm={errorHandler}
          title={error.title}
          message={error.message}
        />
      )}
      <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">Username</label>
          <input
            ref={nameRef}
            onChange={userNameChangeHandler}
            id="username"
            type="text"
            value={name}
          />
          <label htmlFor="age">Age(Years)</label>
          <input
            ref={ageRef}
            onChange={ageChangeHandler}
            id="age"
            type="number"
            value={age}
          />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </div>
  );
};
