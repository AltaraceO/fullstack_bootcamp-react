import { useState, useRef } from "react";

import useInput from "../hooks/use-input";

const SimpleInput = (props) => {
  const {
    valueIsValid: nameIsValid,
    value: name,
    hasError: nameHasError,
    valueChangeHandler: nameChangeHandler,
    inputBlurHandler: nameBlurHandler,
    reset: resetNameInput,
  } = useInput((value) => value.trim() !== "");
  const nameInputRef = useRef();

  const [email, setEmail] = useState("");

  const [emailTouched, setEmailTouched] = useState(false);

  const emailIsValid = email.includes("@");
  const emailIsInvalid = !emailIsValid && emailTouched;

  let formIsValid = false;

  if (nameIsValid && emailIsValid) {
    formIsValid = true;
  }

  const emailInputChangeHandler = (e) => {
    setEmail(e.target.value);
  };

  const emailBlueHandler = (e) => {
    setEmailTouched(true);
  };

  const formSubmissionHandler = (e) => {
    e.preventDefault();

    if (!nameIsValid) {
      return;
    }

    console.log(name, nameInputRef.current.value);
    resetNameInput();
    setEmail("");
    setEmailTouched(false);
  };

  const nameInputClasses = nameHasError
    ? "form-control invalid"
    : "form-control";
  const emailInputClasses = emailIsInvalid
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
          onBlur={nameBlurHandler}
          onChange={nameChangeHandler}
        />
      </div>
      <div className={emailInputClasses}>
        <label htmlFor="email">Your eMail</label>
        <input
          ref={nameInputRef}
          type="email"
          id="email"
          value={email}
          onBlur={emailBlueHandler}
          onChange={emailInputChangeHandler}
        />
      </div>
      {nameHasError && <p className="error-text">Name's too short</p>}
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
