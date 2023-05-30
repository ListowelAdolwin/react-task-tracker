import { useState } from "react";

import "./ExpenseItem.css";
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card.js';

function ExpenseItem(props) {
  const [title, setTitle] = useState(props.title)

  const clickHandler = () => {
    setTitle('Updated Title!!!')
  }

  return (
    <Card className='expense-item'>
      <div className="expense-item__description">
        <ExpenseDate date={props.date}/>
        <h2> {title}</h2>
        <div className="expense-item__price"> ${props.amount}</div>
      </div>
      <button onClick={clickHandler}>Click me</button>
    </Card>
  );
}

export default ExpenseItem;
