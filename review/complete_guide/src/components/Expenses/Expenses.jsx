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

  return (
    <div>
      {console.log("filtered Year", filteredYear)}
      <Card className="expenses">
        <ExpenseFilter selected={filteredYear} onFilterYear={getFilteredYear} />
        {!filteredArr.length ? (
          <p>No Expenses Found</p>
        ) : (
          filteredArr.map((el) => {
            return (
              <ExpenseItem
                title={el.title}
                date={el.date}
                amount={el.amount}
                key={el.id}
              />
            );
          })
        )}
      </Card>
    </div>
  );
};
