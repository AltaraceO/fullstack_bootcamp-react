import { useState, useRef } from "react";

const SimpleInput = (props) => {
  const nameInputRef = useRef();
  const [name, setName] = useState("");
  const [nameIsValid, setNameIsValid] = useState(true);
  const [nameTouched, setNameTouched] = useState(false);

  const nameIsInvalid = !nameIsValid && nameTouched;

  const nameInputChangeHandler = (e) => {
    setName(e.target.value);

    if (e.target.value.trim() !== "") {
      setNameIsValid(true);
    }
  };

  const nameBlueHandler = (e) => {
    setNameTouched(true);
    if (name.trim().length <= 0) {
      setNameIsValid(false);
    }
  };

  const formSubmissionHandler = (e) => {
    e.preventDefault();

    setNameTouched(true);

    if (name.trim().length <= 0) {
      setNameIsValid(false);
      return;
    }
    setNameIsValid(true);
    console.log(name, nameInputRef.current.value);
  };

  const nameInputClasses = nameIsInvalid
    ? "form-control invalid"
    : "form-control";
  return (
    <form onSubmit={formSubmissionHandler}>
      <div className={nameInputClasses}>
        <label htmlFor="name">Your Name</label>
        <input
          ref={nameInputRef}
          type="text"
          id="name"
          value={name}
          onBlur={nameBlueHandler}
          onChange={nameInputChangeHandler}
        />
      </div>
      {nameIsInvalid && <p className="error-text">Name's too short</p>}
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
