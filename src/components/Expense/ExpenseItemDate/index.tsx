import { FC } from "react";
import GlobalStyles from "../../../globalStyles";
import { ExpenseItemProps } from "../ExpenseItem";
import { StyledExpenseDate } from "./styles";

type ExpenseDateProps = Pick<ExpenseItemProps, "date">;

const ExpenseDate: FC<ExpenseDateProps> = ({ date }) => {
  const year = date.toLocaleString("en-US", { year: "numeric" });
  const month = date.toLocaleString("en-US", { month: "long" });
  const day = date.toLocaleString("en-US", { day: "2-digit" });

  return (
    <ul css={StyledExpenseDate} className='expense-date'>
      <li className='year'>{year}</li>
      <li className='month'>{month}</li>
      <li className='day'>{day}</li>
    </ul>
  );
};

export default ExpenseDate;
