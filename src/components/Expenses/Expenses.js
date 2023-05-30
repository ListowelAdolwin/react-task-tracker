import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import Card from "../UI/Card";
import ExpenseFilter from "./ExpenseFilter";
import { useState } from "react";

function Expenses(props) {
  const expenses = props.expenses;
  const [year, setYear] = useState("");
  const onChaneYearHandler = (year) => {
    setYear(year);
  };
  return (
    <div>
      <Card className="expenses">
        <ExpenseFilter onChangeYear={onChaneYearHandler} />
        <ExpenseItem
          title={expenses[0].title}
          amount={expenses[0].amount}
          date={expenses[0].date}
        ></ExpenseItem>
        <ExpenseItem
          title={expenses[1].title}
          amount={expenses[1].amount}
          date={expenses[1].date}
        ></ExpenseItem>
        <ExpenseItem
          date={expenses[2].date}
          title={expenses[2].title}
          amount={expenses[2].amount}
        ></ExpenseItem>
        <ExpenseItem
          date={expenses[3].date}
          title={expenses[3].title}
          amount={expenses[3].amount}
        ></ExpenseItem>
        Year:
        {year}
      </Card>
    </div>
  );
}

export default Expenses;
