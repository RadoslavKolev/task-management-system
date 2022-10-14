import React, { useState } from "react";
import ExpenseDate from "../ExpenseDate/ExpenseDate";
import Card from "../../UI/Card/Card";
import "./ExpenseItem.css";

const ExpenseItem = ({ titleProp, amount, date }) => {
  const [title, setTitle] = useState(titleProp);
  console.log("ExpenseItem evaluated by React");

  const clickHandler = () => {
    console.log(`Old title: ${title}`);
    setTitle("Updated!");
  };

  return (
    <Card className="expense-item">
      <ExpenseDate date={date} />

      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">${amount.toFixed(2)}</div>
      </div>

      <button onClick={clickHandler}>Change Title</button>
    </Card>
  );
};

export default ExpenseItem;
