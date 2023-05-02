import { ChangeEvent, FC, useState } from "react";
import Button from "../../General/Button";
import { expenseControlStyle } from "./styles";

export type NewExpenseControlProps = {
  inputID?: "date" | "price" | "title";
  type: "date" | "number" | "text" | "submit";
  label?: "Date" | "Price" | "Title";
};

const NewExpenseControl: FC<NewExpenseControlProps> = ({ inputID, type, label }) => {
  const [title, setTitle] = useState(() => {
    return "";
  });
  const [price, setPrice] = useState(() => {
    return "";
  });
  const [date, setDate] = useState(() => {
    return "";
  });

  //Im a comment
  const titleChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setTitle(prevTitle => {
      return (prevTitle = event.target.value);
    });
  };

  const priceChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setPrice(prevPrice => {
      return (prevPrice = event.target.value);
    });
  };

  const dateChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setDate(prevDate => {
      return (prevDate = event.target.value);
    });
  };

  if (type === "submit") {
    return (
      <div css={expenseControlStyle}>
        <Button type='submit'>Add Expense</Button>
      </div>
    );
  } else if (type === "text") {
    return (
      <div css={expenseControlStyle}>
        <label htmlFor={inputID}>{label}</label>
        <input type={type} id={inputID} placeholder='New title' onChange={titleChangeHandler} />
      </div>
    );
  } else if (type === "number") {
    return (
      <div css={expenseControlStyle}>
        <label htmlFor={inputID}>{label}</label>
        <input type={type} id={inputID} step='0.01' onChange={priceChangeHandler} />
      </div>
    );
  } else {
    return (
      <div css={expenseControlStyle}>
        <label htmlFor={inputID}>{label}</label>
        <input type={type} id={inputID} onChange={dateChangeHandler} />
      </div>
    );
  }
};

export default NewExpenseControl;
