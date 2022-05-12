import { useState } from "react";
import { Card } from "../UI/Card";
import { ExpenseFilter } from "./ExpenseFilter";
import { ExpenseItem } from "./ExpenseItem";
import "./Expenses.css";
import { ExpensesList } from "./ExpensesList";

export const Expenses = ({ expenses }) => {
  const [filteredYear, setFilteredYear] = useState("2020");

  const getFilteredYear = (year) => {
    setFilteredYear(year);
  };

  const filteredArr = expenses.filter(
    (el) => el.date.getFullYear().toString() === filteredYear
  );

  return (
    <div>
      {console.log("filtered Year", filteredYear)}
      <Card className="expenses">
        <ExpenseFilter selected={filteredYear} onFilterYear={getFilteredYear} />
        <ExpensesList items={filteredArr} />
      </Card>
    </div>
  );
};
