import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import Card from "../UI/Card";
import ExpenseFilter from "./ExpenseFilter";
import ExpensesChart from "./ExpenseChart";
import { useState } from "react";

function Expenses(props) {
  const expenses = props.expenses;
  const [year, setYear] = useState("all");
  const onChaneYearHandler = (year) => {
    setYear(year);
  };

  var filteredExpenses = expenses;

  if (year !== "all") {
    filteredExpenses = expenses.filter(
      (expense) => expense.date.getFullYear().toString() === year
    );
  }

  return (
    <div>
      <Card className="expenses">
        <ExpenseFilter selected={year} onChangeYear={onChaneYearHandler} />
        <ExpensesChart expenses={filteredExpenses} />
        {filteredExpenses.length === 0 && (
          <p className="expenses-list__fallback"> No items found</p>
        )}
        {filteredExpenses.length > 0 &&
          filteredExpenses.map((expense) => (
            <ExpenseItem
              key={expense.id}
              title={expense.title}
              date={expense.date}
              amount={expense.amount}
            />
          ))}
      </Card>
    </div>
  );
}

export default Expenses;
