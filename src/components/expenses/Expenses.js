import React from "react";
import ExpenseItem from "../expenseItem/ExpenseItem";
import Card from "../card/Card";
import "./Expenses.css";

const Expenses = ({ data }) => {
  return (
    <Card className="expenses">
      <ExpenseItem
        key={data.id}
        title={data.title}
        amount={data.amount}
        date={data.date}
      />
    </Card>
  );
};

export default Expenses;
