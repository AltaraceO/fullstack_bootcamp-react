import { useState, useRef } from "react";

const SimpleInput = (props) => {
  const nameInputRef = useRef();
  const [name, setName] = useState("");
  const [nameTouched, setNameTouched] = useState(false);

  const nameIsValid = name.trim() !== "";
  const nameIsInvalid = !nameIsValid && nameTouched;

  let formIsValid = false;

  if (nameIsValid) {
    formIsValid = true;
  }
  const nameInputChangeHandler = (e) => {
    setName(e.target.value);
  };

  const nameBlueHandler = (e) => {
    setNameTouched(true);
  };

  const formSubmissionHandler = (e) => {
    e.preventDefault();

    setNameTouched(true);

    if (!nameIsValid) {
      return;
    }

    console.log(name, nameInputRef.current.value);
    setName("");
    setNameTouched(false);
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
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
