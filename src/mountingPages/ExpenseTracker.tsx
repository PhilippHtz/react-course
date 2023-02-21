import ExpenseList from "../components/ExpenseList";
import { sectionStyle } from "./style";

const ExpenseTracker = () => {
  return (
    <section css={sectionStyle}>
      <ExpenseList />
    </section>
  );
};

export default ExpenseTracker;
