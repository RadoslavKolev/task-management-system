import React, { useState } from "react";
import Card from "../../UI/Card/Card";
import ExpenseItem from "../ExpenseItem/ExpenseItem";
import "./ExpenseLoader.css";
import ExpensesFilter from "../ExpensesFilter/ExpensesFilter";

const ExpenseLoader = ({ data }) => {
  const [filteredYear, setFilteredYear] = useState("2022");

  const filterChangeHandler = (selectedYear) => setFilteredYear(selectedYear);

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />

        {data.map((obj) => (
          <ExpenseItem
            key={obj.id}
            titleProp={obj.title}
            amount={obj.amount}
            date={obj.date}
          />
        ))}
      </Card>
    </div>
  );
};

export default ExpenseLoader;
