import classes from "./HeaderCartButton.module.css";
import CartIcon from "./CartIcon";
export const HeaderCartButton = ({ onClick }) => {
  return (
    <button onClick={onClick} className={classes.button}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>3</span>
    </button>
  );
};
