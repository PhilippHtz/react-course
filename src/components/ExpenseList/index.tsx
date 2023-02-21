import ExpenseItem from "../ExpenseItem";
import { expenses } from "./mockData";

const ExpenseList = () => {
  return (
    <ul>
      {expenses.map((expense, index) => (
        <ExpenseItem
          id={expense.id}
          date={expense.date}
          title={expense.title}
          price={expense.price}
          key={index}
        />
      ))}
    </ul>
  );
};

export default ExpenseList;
