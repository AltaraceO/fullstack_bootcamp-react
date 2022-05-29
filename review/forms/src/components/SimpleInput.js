import { useRef } from "react";

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

  const {
    value: email,
    valueIsValid: emailIsValid,
    hasError: emailHasError,
    valueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    reset: resetEmailInput,
  } = useInput((value) => value.includes("@"));
  const nameInputRef = useRef();

  let formIsValid = false;

  if (nameIsValid && emailIsValid) {
    formIsValid = true;
  }

  const formSubmissionHandler = (e) => {
    e.preventDefault();

    if (!nameIsValid) {
      return;
    }

    console.log(name, nameInputRef.current.value);
    resetNameInput();
    resetEmailInput();
  };

  const nameInputClasses = nameHasError
    ? "form-control invalid"
    : "form-control";
  const emailInputClasses = emailHasError
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
      <hr />
      <div className={emailInputClasses}>
        <label htmlFor="email">Your eMail</label>
        <input
          ref={nameInputRef}
          type="email"
          id="email"
          value={email}
          onBlur={emailBlurHandler}
          onChange={emailChangeHandler}
        />
      </div>
      {nameHasError && <p className="error-text">Name's too short</p>}
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
      <hr />
    </form>
  );
};

export default SimpleInput;
