import React from 'react';
import ExpenseItem from '../ExpenseItem/ExpenseItem';
import './ExpensesList.css';

const ExpensesList = ({ data }) => {
  if (data.length === 0) {
    return <h2 className="expenses-list__fallback">Found no expenses.</h2>
  }

  return (
    <ul className="expenses-list">
      {
        data.map((obj) => (
          <ExpenseItem
            key={obj.id}
            title={obj.title}
            amount={obj.amount}
            date={obj.date}
          />
        ))
      }
    </ul>
  );
};

export default ExpensesList;