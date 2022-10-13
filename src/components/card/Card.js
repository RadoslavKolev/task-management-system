import React from 'react';
import './Card.css';

// Card component serves like a wrapper (div)
const Card = (props) => {
  const classes = 'card ' + props.className;
   
  return (
    <div className={classes}>
      {props.children} 
    </div>
  );
};

export default Card;