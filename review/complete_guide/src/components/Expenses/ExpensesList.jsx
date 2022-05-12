import "./ExpensesList.css";
import { ExpenseItem } from "./ExpenseItem";

export const ExpensesList = ({ items }) => {
  if (items.length === 0) {
    return <h2 className="expenses-list__fallback">No Expenses Found</h2>;
  }
  return (
    <ul className="expenses-list">
      {items.map((el) => {
        return (
          <ExpenseItem
            title={el.title}
            date={el.date}
            amount={el.amount}
            key={el.id}
          />
        );
      })}
    </ul>
  );
};
