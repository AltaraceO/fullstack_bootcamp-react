import classes from "./Button.module.css";

export const Button = ({ children, className, type, onClick }) => {
  return (
    <div className={classes.button} type={type || "button"} onClick={onClick}>
      {children}
    </div>
  );
};
