import NewExpenseControl from "../NewExpenseControl";
import { NewExpenseControlData } from "./NewExpenseData";
import { formStyle } from "./style";

const NewExpense = () => {
  return (
    <>
      <form action='' css={formStyle}>
        {NewExpenseControlData.map((expenseControl, index) => {
          return (
            <NewExpenseControl
              type={expenseControl.type}
              inputID={expenseControl.inputID}
              label={expenseControl.label}
              key={index}
            />
          );
        })}
      </form>
    </>
  );
};

export default NewExpense;
