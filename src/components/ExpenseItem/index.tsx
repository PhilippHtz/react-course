import { FC } from "react";
import ExpenseDate from "../ExpenseDate";
import ExpensePrice from "../ExpensePrice";
import ExpenseTitle from "../ExpenseTitle";
import { StyledExpenseItem } from "./styles";

export type ExpenseItemProps = {
  id: string;
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
