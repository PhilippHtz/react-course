import { FC } from "react";
import { expenseControlStyle } from "./style";

export type NewExpenseControlProps = {
  inputID?: "date" | "price" | "title";
  type: "date" | "number" | "text" | "submit";
  label?: "Date" | "Price" | "Title";
};

const NewExpenseControl: FC<NewExpenseControlProps> = ({ inputID, type, label }) => {
  if (type === "submit") {
    return (
      <div css={expenseControlStyle}>
        <button type='submit'>Add Expense</button>
      </div>
    );
  } else if (type === "text") {
    return (
      <div css={expenseControlStyle}>
        <label htmlFor={inputID}>{label}</label>
        <input type={type} id={inputID} placeholder='New title' />
      </div>
    );
  } else {
    return (
      <div css={expenseControlStyle}>
        <label htmlFor={inputID}>{label}</label>
        <input type={type} id={inputID} />
      </div>
    );
  }
};

export default NewExpenseControl;
