import { useContext } from "react";

import classes from "./HeaderCartButton.module.css";
import CartIcon from "./CartIcon";
import CartContext from "./../../store/cart-context";

export const HeaderCartButton = ({ onClick }) => {
  const cartCtx = useContext(CartContext);

  const { items } = cartCtx;

  const numberOfCartItems = items.reduce((curNumber, item) => {
    return curNumber + item.amount;
  }, 0);

  return (
    <button onClick={onClick} className={classes.button}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{numberOfCartItems}</span>
    </button>
  );
};
