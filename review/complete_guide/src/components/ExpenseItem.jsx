import React from "react";
import "./ExpenseItem.css";
import { ExpenseDate } from "./ExpenseDate";

export const ExpenseItem = ({ date, amount, title }) => {
  return (
    <div className="expense-item">
      <ExpenseDate date={date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">${amount}</div>
      </div>
    </div>
  );
};
