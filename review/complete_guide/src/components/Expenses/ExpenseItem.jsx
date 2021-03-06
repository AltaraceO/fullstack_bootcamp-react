import "./ExpenseItem.css";
import { ExpenseDate } from "./ExpenseDate";
import { Card } from "../UI/Card";
import { useState } from "react";

export const ExpenseItem = ({ date, amount, title }) => {
  const [titleOne, setTitleOne] = useState(title);
  const clickHandler = () => {
    console.log("clicked");
    setTitleOne("boom");
  };
  return (
    <li>
      <Card className="expense-item">
        <ExpenseDate date={date} />
        <div className="expense-item__description">
          <h2>{titleOne}</h2>
          <div className="expense-item__price">${amount}</div>
        </div>
        <button onClick={clickHandler}>Change Title</button>
      </Card>
    </li>
  );
};
