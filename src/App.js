import React, { useState } from "react";
import ExpenseLoader from "./components/Expenses/ExpenseLoader/ExpenseLoader";
import NewExpense from "./components/NewExpenses/NewExpense/NewExpense";

//* Dummy Data
const INITIAL_EXPENSES = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(2021, 7, 14),
  },
  {
    id: "e2",
    title: "New TV",
    amount: 799.49,
    date: new Date(2022, 2, 12),
  },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2022, 2, 28),
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 450.0,
    date: new Date(2022, 5, 12),
  },
];

const App = () => {
  const [expenses, setExpenses] = useState(INITIAL_EXPENSES);

  //* Takes the extracted data and sets the new state
  //* returns new array with the data on the front
  const addExpenseHandler = (expense) => {
    setExpenses((prevArr) => {
      return [expense, ...prevArr];
    });
  };

  // return React.createElement(
  //   'div',
  //   {},
  //   React.createElement('h2', {}, "Let's get started!"),
  //   React.createElement(Expenses, { items: expenses })
  // );

  return (
    <div>
      <NewExpense onAddExpenseHandler={addExpenseHandler} />
      <ExpenseLoader data={expenses} />
    </div>
  );
};

export default App;
