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
  return (
    <div>
      {console.log("filtered Year", filteredYear)}
      <Card className="expenses">
        <ExpenseFilter selected={filteredYear} onFilterYear={getFilteredYear} />
        {expenses.map((el) => {
          return (
            <ExpenseItem
              title={el.title}
              date={el.date}
              amount={el.amount}
              key={el.id}
            />
          );
        })}
      </Card>
    </div>
  );
};
