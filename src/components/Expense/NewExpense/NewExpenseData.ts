import { NewExpenseControlProps } from "../NewExpenseControl";

export const NewExpenseControlData: NewExpenseControlProps[] = [
  { inputID: "date", type: "date", label: "Date" },
  { inputID: "title", type: "text", label: "Title" },
  { inputID: "price", type: "number", label: "Price" },
  { type: "submit" },
];
