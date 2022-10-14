import React, { useState } from 'react';
import './ExpenseForm.css';

const ExpenseForm = () => {
  const [userTitle, setUserTitle] = useState('');
  const [userAmount, setUserAmount] = useState('');
  const [userDate, setUserDate] = useState('');

  // event.target.value always returns STRING
  const titleChangeHandler = event => setUserTitle(event.target.value);
  const amountChangeHandler = event => setUserAmount(event.target.value);
  const dateChangeHandler = event => setUserDate(event.target.value);

  return (
    <form action="">
      <div className='new-expense__controls'>
        <div className='new-expense__control'>
          <label>Title</label>
          <input type="text" onChange={titleChangeHandler} />
        </div>
        <div className='new-expense__control'>
          <label>Amount</label>
          <input type="number" min="0.01" step="0.01" onChange={amountChangeHandler} />
        </div>
        <div className='new-expense__control'>
          <label>Date</label>
          <input type="date" min="2019-01-01" max="2022-12-31" onChange={dateChangeHandler} />
        </div>
      </div>

      <div className='new-expense__actions'>
        <button type='submit'>Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;