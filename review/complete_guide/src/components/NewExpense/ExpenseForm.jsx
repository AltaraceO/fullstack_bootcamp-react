import { useState } from "react";
import "./ExpenseForm.css";

export const ExpenseForm = ({ onStopEdit, onSaveExpenseData }) => {
  //   const [title, setTitle] = useState(null);
  //   const [amount, setAmount] = useState(null);
  //   const [date, setDate] = useState(null);
  const [userInput, setUserInput] = useState({
    title: "",
    amount: "",
    date: "",
  });

  const changeHandlerTitle = (e) => {
    setUserInput((prevState) => {
      return { ...prevState, title: e.target.value };
    });
  };
  const changeHandlerAmount = (e) => {
    setUserInput((prevState) => {
      return { ...prevState, amount: e.target.value };
    });
  };
  const changeHandlerDate = (e) => {
    setUserInput((prevState) => {
      return { ...prevState, date: e.target.value };
    });
  };

  const submitHandler = (e) => {
    e.preventDefault();

    const expenseData = {
      ...userInput,
      date: new Date(userInput.date),
    };

    onSaveExpenseData(expenseData);
    setUserInput({ title: "", amount: "", date: "" });
    onStopEdit();
  };

  return (
    <form onSubmit={submitHandler}>
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
        <button type="button" onClick={onStopEdit}>
          Cancel
        </button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};
