import React from "react";
import Card from "../../UI/Card/Card";
import ExpenseItem from "../ExpenseItem/ExpenseItem";
import "./ExpenseLoader.css";

const ExpenseLoader = ({ data }) => {
  return (
    <Card className="expenses">
      <ExpenseItem
        key={data.id}
        titleProp={data.title}
        amount={data.amount}
        date={data.date}
      />
    </Card>
  );
};

export default ExpenseLoader;
