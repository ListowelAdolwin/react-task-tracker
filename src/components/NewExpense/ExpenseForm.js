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
      amount: enteredAmount,
      date: new Date(enteredDate),
    };

    props.onSaveExpenseData(inputData);

    setEnteredAmount("");
    setEnteredDate("");
    setEnteredTitle("");
  };

  return (
    <div>
      <form onSubmit={submitHandler}>
        <div className="new-expense__controls">
          <div className="new-expense__control">
            <label>Title</label>
            <input
              value={enteredTitle}
              onChange={titleChangehandler}
              type="text"
            />
          </div>
          <div className="new-expense__control">
            <label>Amount</label>
            <input
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
              value={enteredDate}
              onChange={dateChangehandler}
              type="date"
              min="2019-01-01"
              max="2022-12-31"
            />
          </div>
        </div>
        <div className="new-expense__actions">
          <button type="submit">Add Expense</button>
          Title: {enteredTitle}
          Amount: {enteredAmount}
          Date: {enteredDate}
        </div>
      </form>
    </div>
  );
}

export default ExpenseForm;
