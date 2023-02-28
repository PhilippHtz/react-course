import ExpenseList from "../components/Expense/ExpenseList";
import NewExpense from "../components/Expense/NewExpense";
import { sectionStyle } from "./style";

const ExpenseTracker = () => {
  return (
    <section css={sectionStyle}>
      <NewExpense />
      <ExpenseList />
    </section>
  );
};

export default ExpenseTracker;
