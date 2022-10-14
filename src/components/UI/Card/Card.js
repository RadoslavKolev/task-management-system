import React from 'react';
import './Card.css';

// Card component serves like a wrapper (div) for ExpenseItem
const Card = (props) => {
  const classes = 'card ' + props.className;
   
  return (
    <div className={classes}>
      {/* props.children returns an array of everything between the props - see ExpenseItem and Expenses */}
      {props.children} 
    </div>
  );
};

export default Card;