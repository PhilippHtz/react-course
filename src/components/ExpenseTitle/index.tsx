import { FC } from "react";
import { ExpenseItemProps } from "../ExpenseItem";
import { ExpenseTitleStyle } from "./styles";

type ExpenseTitleProps = Pick<ExpenseItemProps, "title">;

const ExpenseTitle: FC<ExpenseTitleProps> = ({ title }) => {
  return (
    <h2 css={ExpenseTitleStyle} className='expense-title'>
      {title}
    </h2>
  );
};

export default ExpenseTitle;
