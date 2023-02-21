import { FC } from "react";
import { ExpenseItemProps } from "../ExpenseItem";
import { ExpensePriceStyle } from "./styles";

type ExpensePriceProps = Pick<ExpenseItemProps, "price">;

const ExpensePrice: FC<ExpensePriceProps> = ({ price }) => {
  return (
    <span css={ExpensePriceStyle} className='expense-price'>
      <span>$</span>
      <span>{price}</span>
    </span>
  );
};

export default ExpensePrice;
