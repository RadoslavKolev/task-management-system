import React from "react";
import ExpenseItem from "../expenseItem/ExpenseItem";
import "./Expenses.css";

const Expenses = ({ data }) => {
  return (
    <div className="expenses">
      <ExpenseItem
        key={data.id}
        title={data.title}
        amount={data.amount}
        date={data.date}
      />
    </div>
  );
};

export default Expenses;
