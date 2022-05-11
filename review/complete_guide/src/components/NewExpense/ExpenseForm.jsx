import { useState } from "react";
import "./ExpenseForm.css";

export const ExpenseForm = () => {
  //   const [title, setTitle] = useState(null);
  //   const [amount, setAmount] = useState(null);
  //   const [date, setDate] = useState(null);
  const [userInput, setUserInput] = useState({
    title: null,
    amout: null,
    date: null,
  });

  const handleUserInput = (e, name) => {
    setUserInput({
      ...userInput,
      name: e.target.value,
    });
  };

  const changeHandlerTitle = (e) => {
    // setTitle(e.target.value);
  };
  const changeHandlerAmount = (e) => {
    // setAmount(e.target.value);
  };
  const changeHandlerDate = (e) => {
    console.log(e);
  };
  return (
    <form>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            onChange={changeHandlerTitle}
            value={userInput.title}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            onChange={changeHandlerAmount}
            value={userInput.amount}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            onChange={changeHandlerDate}
            value={userInput.date}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};
