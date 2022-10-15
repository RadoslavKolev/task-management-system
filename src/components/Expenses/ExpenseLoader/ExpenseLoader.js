import React, { useState } from "react";
import Card from "../../UI/Card/Card";
import ExpenseItem from "../ExpenseItem/ExpenseItem";
import "./ExpenseLoader.css";
import ExpensesFilter from "../ExpensesFilter/ExpensesFilter";

const ExpenseLoader = ({ data }) => {
  const [filteredYear, setFilteredYear] = useState("2022");

  const filterChangeHandler = selectedYear => setFilteredYear(selectedYear);
  
  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />

        <ExpenseItem
          key={data[0].id}
          titleProp={data[0].title}
          amount={data[0].amount}
          date={data[0].date}
        />

        <ExpenseItem
          key={data[1].id}
          titleProp={data[1].title}
          amount={data[1].amount}
          date={data[1].date}
        />
        
        <ExpenseItem
          key={data[2].id}
          titleProp={data[2].title}
          amount={data[2].amount}
          date={data[2].date}
        />

        <ExpenseItem
          key={data[3].id}
          titleProp={data[3].title}
          amount={data[3].amount}
          date={data[3].date}
        />
      </Card>
    </div>
  );
};

export default ExpenseLoader;
