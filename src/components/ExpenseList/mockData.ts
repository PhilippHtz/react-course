import { ExpenseItemProps } from "../ExpenseItem";

type Expense = ExpenseItemProps;

export const expenses: Expense[] = [
  {
    id: "e1",
    date: new Date(2023, 2, 28),
    title: "Car Insurance",
    price: 294.67,
  },
  {
    id: "e2",
    date: new Date(2023, 3, 22),
    title: "Toilet Paper",
    price: 15.99,
  },
  { id: "e3", date: new Date(2023, 4, 20), title: "Snacks", price: 23.97 },
  { id: "e4", date: new Date(2023, 5, 15), title: "New TV", price: 499.99 },
];
