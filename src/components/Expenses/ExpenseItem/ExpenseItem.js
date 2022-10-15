import React from "react";
import ExpenseDate from "../ExpenseDate/ExpenseDate";
import Card from "../../UI/Card/Card";
import "./ExpenseItem.css";

const ExpenseItem = ({ title, amount, date }) => {
  return (
    <li>
      <Card className="expense-item">
        <ExpenseDate date={date} />

        <div className="expense-item__description">
          <h2>{title}</h2>
          <div className="expense-item__price">
            ${Number(amount).toFixed(2)}
          </div>
        </div>
      </Card>
    </li>
  );
};

export default ExpenseItem;
