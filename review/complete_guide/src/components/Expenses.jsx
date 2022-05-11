import { Card } from "./Card";
import { ExpenseItem } from "./ExpenseItem";
import "./Expenses.css";

export const Expenses = ({ expenses }) => {
  return (
    <Card className="expenses">
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
  );
};
