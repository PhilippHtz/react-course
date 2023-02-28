import ExpenseItem from "../ExpenseItem";
import { expenses } from "./mockData";

const ExpenseList = () => {
  return (
    <ul>
      {expenses.map(expense => {
        return (
          <ExpenseItem
            id={expense.id}
            date={expense.date}
            title={expense.title}
            price={expense.price}
            key={expense.id}
          />
        );
      })}
    </ul>
  );
};

export default ExpenseList;
