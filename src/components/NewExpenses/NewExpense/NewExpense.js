import React, { useState } from "react";
import ExpenseForm from "../ExpenseForm/ExpenseForm";
import "./NewExpense.css";

const NewExpense = ({ onAddExpenseHandler }) => {
  const [userId, setUserId] = useState(5);

  // Function that extracts data from Child component
  const extractData = (enteredFormData) => {
    const extractedData = {
      id: 'e' + userId,
      ...enteredFormData,
    };

    setUserId(userId + 1);
    onAddExpenseHandler(extractedData)
  };

  return (
    <div className="new-expense">
      <ExpenseForm onExtractData={extractData} />
    </div>
  );
};

export default NewExpense;
