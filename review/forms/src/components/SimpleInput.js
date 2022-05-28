import { useState, useRef } from "react";

const SimpleInput = (props) => {
  const nameInputRef = useRef();
  const [name, setName] = useState("");
  const [nameIsValid, setNameIsValid] = useState(true);

  const nameInputChangeHandler = (e) => {
    setName(e.target.value);
  };

  const formSubmissionHandler = (e) => {
    e.preventDefault();

    if (name.trim().length <= 0) {
      setNameIsValid(false);
      return;
    }
    setNameIsValid(true);
    console.log(name, nameInputRef.current.value);
  };

  const nameInputClasses = nameIsValid
    ? "form-control"
    : "form-control invalid";
  return (
    <form onSubmit={formSubmissionHandler}>
      <div className={nameInputClasses}>
        <label htmlFor="name">Your Name</label>
        <input
          ref={nameInputRef}
          type="text"
          id="name"
          value={name}
          onChange={nameInputChangeHandler}
        />
      </div>
      {!nameIsValid && <p className="error-text">Name's too short</p>}
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
