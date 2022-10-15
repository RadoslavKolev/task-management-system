import React, { useState } from "react";
import ExpenseForm from "../ExpenseForm/ExpenseForm";
import "./NewExpense.css";

const NewExpense = ({ onAddExpenseHandler }) => {
  const [userId, setUserId] = useState(5);
  const [isEditing, setIsEditing] = useState(false);

  //* Function that shows/hides the input form
  const editingHandler = () => setIsEditing((prevState) => !prevState);

  //* Function that extracts data from the Child component
  const extractData = (enteredFormData) => {
    const extractedData = {
      id: "e" + userId,
      ...enteredFormData,
    };

    setUserId((prevId) => prevId + 1);
    onAddExpenseHandler(extractedData);
  };

  return (
    <div className="new-expense">
      {isEditing ? (
        <ExpenseForm
          onExtractData={extractData}
          onStopEditing={editingHandler}
        />
      ) : (
        <button onClick={editingHandler}>Add New Expense</button>
      )}
    </div>
  );
};

export default NewExpense;
