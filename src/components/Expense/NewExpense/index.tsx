import NewExpenseControl from "../NewExpenseControl";
import { formStyle } from "./styles";

const NewExpense = () => {
  return (
    <>
      <form action='' css={formStyle}>
        <NewExpenseControl type='date' inputID='date' label='Date' />
        <NewExpenseControl type='text' inputID='title' label='Title' />
        <NewExpenseControl type='number' inputID='price' label='Price' />
        <NewExpenseControl type='submit' />
      </form>
    </>
  );
};

export default NewExpense;
