import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = ({ onExtractData }) => {
  //? Multiple useState approach
  //* GOOD APPROACH
  const [userTitle, setUserTitle] = useState("");
  const [userAmount, setUserAmount] = useState("");
  const [userDate, setUserDate] = useState("");

  //* "event.target.value" always returns a STRING *//
  const titleChangeHandler = (event) => setUserTitle(event.target.value);
  const amountChangeHandler = (event) => setUserAmount(event.target.value);
  const dateChangeHandler = (event) => setUserDate(event.target.value);

  /**
   * *  Single useState approach
   * ! BAD APPROACH
   * 
     const [userInput, setUserInput] = useState({
       userTitle: '',
       userAmount: '',
       userDate: '',
     });

  * * Same for the other handlers
     const titleChangeHandler = event => {
       setUserInput({
         ...userInput,
         userTitle: event.target.value,
       });

       setUserInput((prevState) => {
         return {
           ...prevState,
           userTitle: event.target.value,
         }
       });
     }
  */

  // prevents the default browser behavior
  // prevents the reloading of the page when submitting
  const submitHandler = (e) => {
    e.preventDefault();

    const expenseData = {
      title: userTitle,
      amount: userAmount,
      date: new Date(userDate),
    };

    // Passing the object to the parent component
    onExtractData(expenseData);

    // Clearing the Form
    //* Look at the "value" property of the <input>
    setUserTitle("");
    setUserAmount("");
    setUserDate("");
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" value={userTitle} onChange={titleChangeHandler} />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={userAmount}
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            value={userDate}
            onChange={dateChangeHandler}
          />
        </div>
      </div>

      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
