import React, { useState } from "react";
import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";

const ExpenseItem = (props) => {
  let [title, setTitle] = useState(props.title);
  const expenseAmount = props.amount;

  const clickHandler = () => {
    setTitle("roar");
  };
  
  return (
    <div className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">{expenseAmount}</div>
      </div>
      <button onClick={clickHandler}>Grim Reapers</button>
    </div>
  );
};

export default ExpenseItem;
