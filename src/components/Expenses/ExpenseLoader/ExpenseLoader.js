import React, { useState } from "react";
import Card from "../../UI/Card/Card";
import ExpensesFilter from "../ExpensesFilter/ExpensesFilter";
import ExpensesList from "../ExpensesList/ExpensesList";
import "./ExpenseLoader.css";

const ExpenseLoader = ({ data }) => {
  const [filteredYear, setFilteredYear] = useState("2022");

  const filterChangeHandler = (selectedYear) => setFilteredYear(selectedYear);

  //* Filtering the items by selected year
  const filteredExpenses = data.filter(
    (obj) => obj.date.getFullYear().toString() === filteredYear
  );

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />

        {/* We can also make a conditional rendering */}
        <ExpensesList data={filteredExpenses} />
      </Card>
    </div>
  );
};

export default ExpenseLoader;
