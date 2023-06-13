import React, { useState } from "react";
import "./ExpenseForm.css";

function ExpenseForm(props) {
  // An alternative is to have one useState which takes an object(with title, amount and date as attributes) as argument
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  const titleChangehandler = (event) => {
    setEnteredTitle(event.target.value);
  };

  const amountChangehandler = (event) => {
    setEnteredAmount(event.target.value);
  };

  const dateChangehandler = (event) => {
    setEnteredDate(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const inputData = {
      title: enteredTitle,
      amount: +enteredAmount,
      date: new Date(enteredDate),
    };

    props.onSaveExpenseData(inputData);

    setEnteredAmount("");
    setEnteredDate("");
    setEnteredTitle("");
    props.onToggle()
  };

  return (
    <div>
      <form onSubmit={submitHandler}>
        <div className="new-expense__controls">
          <div className="new-expense__control">
            <label>Title</label>
            <input
              placeholder="Enter item title"
              required={true}
              value={enteredTitle}
              onChange={titleChangehandler}
              type="text"
            />
          </div>
          <div className="new-expense__control">
            <label>Amount</label>
            <input
              placeholder="Enter amount"
              required={true}
              value={enteredAmount}
              onChange={amountChangehandler}
              type="number"
              min="0.01"
              step="0.01"
            />
          </div>
          <div className="new-expense__control">
            <label>Date</label>
            <input
              required={true}
              value={enteredDate}
              onChange={dateChangehandler}
              type="date"
            />
          </div>
        </div>
        <div className="new-expense__actions">
          <button onClick={props.onToggle} type="button">Cancel</button>
          <button type="submit">Add Expense</button>
        </div>
      </form>
    </div>
  );
}

export default ExpenseForm;
