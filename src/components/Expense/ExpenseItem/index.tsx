import { FC } from "react";
import ExpenseDate from "../ExpenseItemDate";
import ExpensePrice from "../ExpenseItemPrice";
import ExpenseTitle from "../ExpenseItemTitle";
import { StyledExpenseItem } from "./styles";

export type ExpenseItemProps = {
  id: number;
  date: Date;
  title: string;
  price: number;
};

const ExpenseItem: FC<ExpenseItemProps> = ({ date, title, price }) => {
  return (
    <li css={StyledExpenseItem}>
      <ExpenseDate date={date} />
      <ExpenseTitle title={title} />
      <ExpensePrice price={price} />
    </li>
  );
};

export default ExpenseItem;
