import { useState } from "react";
import { Card } from "../UI/Card";
import { ExpenseFilter } from "./ExpenseFilter";
import { ExpenseItem } from "./ExpenseItem";
import "./Expenses.css";

export const Expenses = ({ expenses }) => {
  const [filteredYear, setFilteredYear] = useState("2020");

  const getFilteredYear = (year) => {
    setFilteredYear(year);
  };

  const filteredArr = expenses.filter(
    (el) => el.date.getFullYear().toString() === filteredYear
  );

  let expensesContent = <p>No Expenses Found</p>;

  if (filteredArr.length > 0) {
    expensesContent = filteredArr.map((el) => {
      return (
        <ExpenseItem
          title={el.title}
          date={el.date}
          amount={el.amount}
          key={el.id}
        />
      );
    });
  }

  return (
    <div>
      {console.log("filtered Year", filteredYear)}
      <Card className="expenses">
        <ExpenseFilter selected={filteredYear} onFilterYear={getFilteredYear} />
        {expensesContent}
      </Card>
    </div>
  );
};
