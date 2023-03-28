import { ChangeEvent, FC, useState } from "react";
import Button from "../../General/Button";
import { expenseControlStyle } from "./styles";

export type NewExpenseControlProps = {
  inputID?: "date" | "price" | "title";
  type: "date" | "number" | "text" | "submit";
  label?: "Date" | "Price" | "Title";
};

const NewExpenseControl: FC<NewExpenseControlProps> = ({ inputID, type, label }) => {
  const [userInput, setUserInput] = useState(() => {
    return {
      title: "",
      price: "",
      date: "",
    };
  });

  //Im a comment
  const titleChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setUserInput(
      newTitle =>
        (newTitle = {
          ...userInput,
          title: event.target.value,
        })
    );
  };

  const priceChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setUserInput(
      newPrice =>
        (newPrice = {
          ...userInput,
          price: event.target.value,
        })
    );
  };

  const dateChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setUserInput(
      newDate =>
        (newDate = {
          ...userInput,
          date: event.target.value,
        })
    );
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
