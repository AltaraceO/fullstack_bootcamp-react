import "./NewExpense.css";
import { ExpenseForm } from "./ExpenseForm";
import { useState } from "react";

export const NewExpense = ({ onAddExpense }) => {
  const [toggle, setToggle] = useState(false);

  const saveExpenseDataHandler = (enteredExpenseData) => {
    console.log(enteredExpenseData);
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    onAddExpense(expenseData);
  };

  const startEditing = () => {
    toggle ? setToggle(false) : setToggle(true);
  };
  return (
    <div className="new-expense">
      {!toggle && <button onClick={startEditing}>Add New Expense</button>}
      {toggle && (
        <ExpenseForm
          onStopEdit={startEditing}
          onSaveExpenseData={saveExpenseDataHandler}
        />
      )}
    </div>
  );
};
