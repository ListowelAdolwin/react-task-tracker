import React, { useState } from "react";

import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  const [showAddButton, setShowAddButton] = useState(true)

  const expenseDataHandler = (inputData) => {
    const expenseData = {
      ...inputData,
      id: Math.random().toString(),
    };

    props.onAddExpense(expenseData);
  };

  const toggle = () => {
    setShowAddButton(false)
  };

  const toggleHandler = () => {
    setShowAddButton(true)
  }

  let content = (
    <div className="new-expense">
      <button onClick={toggle} type="submit">
        Add New Expense
      </button>
    </div>
  );

  if (showAddButton === false) {
    content = (
      <div className="new-expense">
        <ExpenseForm onToggle = {toggleHandler} onSaveExpenseData={expenseDataHandler} />
      </div>
    );
  }

  return (
    <div>
      {content}
    </div>
  );
};

export default NewExpense;
