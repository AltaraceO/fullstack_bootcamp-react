import classes from "./Checkout.module.css";
import { useRef, useState } from "react";

const isEmpty = (value) => value.trim() === "";
const isLength = (value) => value.trim().length === 3;

export const Checkout = ({ onCancel }) => {
  const [inputValidity, setInputValidity] = useState({
    name: true,
    street: true,
    postal: true,
    city: true,
  });

  const nameRef = useRef();
  const streetRef = useRef();
  const postalRef = useRef();
  const cityRef = useRef();

  const confirmHandler = (e) => {
    e.preventDefault();

    const enteredName = nameRef.current.value;
    const enteredStreet = streetRef.current.value;
    const enteredPostal = postalRef.current.value;
    const enteredCity = cityRef.current.value;

    const validName = !isEmpty(enteredName);
    const validStreet = !isEmpty(enteredStreet);
    const validPostal = isLength(enteredPostal);
    const validCity = !isEmpty(enteredCity);

    console.log("city", validCity);
    setInputValidity({
      name: validName,
      street: validStreet,
      postal: validPostal,
      city: validCity,
    });

    const formIsValid = validCity && validName && validPostal && validStreet;

    if (!formIsValid) {
      return;
    }
  };

  const nameControlClasses = `${classes.control} ${
    inputValidity.name ? "" : classes.invalid
  }`;
  const streetControlClasses = `${classes.control} ${
    inputValidity.street ? "" : classes.invalid
  }`;
  const postalControlClasses = `${classes.control} ${
    inputValidity.postal ? "" : classes.invalid
  }`;
  const cityControlClasses = `${classes.control} ${
    inputValidity.city ? "" : classes.invalid
  }`;

  return (
    <form className={classes.form} onSubmit={confirmHandler}>
      <div className={nameControlClasses}>
        <label htmlFor="name">Your Name</label>
        <input ref={nameRef} type="text" id="name" />
        {!inputValidity.name && <p>Please Enter a valid Name</p>}
      </div>
      <div className={streetControlClasses}>
        <label htmlFor="street">Street</label>
        <input ref={streetRef} type="text" id="street" />
        {!inputValidity.street && <p>Please Enter a valid Street</p>}
      </div>
      <div className={postalControlClasses}>
        <label htmlFor="postal">Postal Code</label>
        <input ref={postalRef} type="text" id="postal" />
        {!inputValidity.postal && <p>Please Enter a valid Postal</p>}
      </div>
      <div className={cityControlClasses}>
        <label htmlFor="city">City</label>
        <input ref={cityRef} type="text" id="city" />
        {!inputValidity.city && <p>Please Enter a valid City</p>}
      </div>
      <div className={classes.actions}>
        <button type="button" onClick={onCancel}>
          Cancel
        </button>
        <button onClick={confirmHandler} className={classes.submit}>
          Confirm
        </button>
      </div>
    </form>
  );
};
