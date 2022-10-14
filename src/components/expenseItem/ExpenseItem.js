import React from "react";
import ExpenseDate from "../expenseDate/ExpenseDate";
import Card from "../card/Card";
import "./ExpenseItem.css";

const ExpenseItem = ({ title, amount, date }) => {
  const clickHandler = () => {
    console.log('Clicked!');
  };

  return (
    <Card className="expense-item">
      <ExpenseDate date={date} />

      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">${amount.toFixed(2)}</div>
      </div>

      <button onClick={clickHandler}>
        Change Title
      </button>
    </Card>
  );
};

export default ExpenseItem;
