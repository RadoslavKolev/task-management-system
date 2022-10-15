import React from "react";
import ExpenseLoader from "./components/Expenses/ExpenseLoader/ExpenseLoader";
import NewExpense from "./components/NewExpenses/NewExpense/NewExpense";

const App = () => {
  const expenses = [
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

  // TODO: Render the added task automatically
  const addExpenseHandler = (expense) => {
    expenses.push(expense);
    console.log(expenses);
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
