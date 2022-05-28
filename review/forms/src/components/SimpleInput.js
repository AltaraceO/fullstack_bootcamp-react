import { useState, useRef } from "react";

const SimpleInput = (props) => {
  const nameInputRef = useRef();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [nameTouched, setNameTouched] = useState(false);
  const [emailTouched, setEmailTouched] = useState(false);

  const nameIsValid = name.trim() !== "";
  const nameIsInvalid = !nameIsValid && nameTouched;

  const emailIsValid = email.includes("@");
  const emailIsInvalid = !emailIsValid && emailTouched;

  let formIsValid = false;

  if (nameIsValid && emailIsValid) {
    formIsValid = true;
  }
  const nameInputChangeHandler = (e) => {
    setName(e.target.value);
  };

  const emailInputChangeHandler = (e) => {
    setEmail(e.target.value);
  };

  const nameBlueHandler = (e) => {
    setNameTouched(true);
  };
  const emailBlueHandler = (e) => {
    setEmailTouched(true);
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
    setEmail("");
    setEmailTouched(false);
  };

  const nameInputClasses = nameIsInvalid
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
          onBlur={nameBlueHandler}
          onChange={nameInputChangeHandler}
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
      {nameIsInvalid && <p className="error-text">Name's too short</p>}
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
