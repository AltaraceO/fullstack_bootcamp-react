import { useContext, useState } from "react";
import CartContext from "./../../store/cart-context";
import classes from "./Cart.module.css";
import { Modal } from "../UI/Modal";
import CartItem from "./CartItem";
import { Checkout } from "./Checkout";

export const Cart = ({ onClose }) => {
  const [showForm, setShowForm] = useState(false);
  const cartCtx = useContext(CartContext);

  const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
  const hasItems = cartCtx.items.length > 0;

  const cartItemRemoveHandler = (id) => {
    cartCtx.removeItem(id);
  };
  const cartItemAddHandler = (item) => {
    cartCtx.addItem({ ...item, amount: 1 });
  };
  const orderHandler = () => {
    setShowForm(true);
  };

  const submitOrderHandler = (userData) => {
    console.log(userData);
  };

  const cartItems = (
    <ul className={classes["cart-items"]}>
      {cartCtx.items.map((item) => (
        <CartItem
          key={item.id}
          name={item.name}
          amount={item.amount}
          price={item.price}
          onRemove={cartItemRemoveHandler.bind(null, item.id)}
          onAdd={cartItemAddHandler.bind(null, item)}
        />
      ))}
    </ul>
  );

  const modalActions = (
    <div className={classes.actions}>
      <button onClick={onClose} className={classes["button--alt"]}>
        Close
      </button>
      {hasItems && (
        <button onClick={orderHandler} className={classes.button}>
          Order
        </button>
      )}
    </div>
  );

  return (
    <Modal onClose={onClose}>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount </span>
        <span>{totalAmount}</span>
      </div>
      {showForm && (
        <Checkout onConfirm={submitOrderHandler} onCancel={onClose} />
      )}
      {!showForm && modalActions}
    </Modal>
  );
};
