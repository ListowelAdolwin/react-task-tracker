import Expenses from "./Expenses";

const TestExpense = () => {
const expenses = [
    {
      id: "e5",
      title: "Macbook",
      amount: 210.54,
      date: new Date(2023, 7, 24),
    },
    { id: "e2",
      title: "Calculator",
      amount: 579.49,
      date: new Date(2023, 2, 22)
    },
    {
      id: "e3",
      title: "Bag of Rice",
      amount: 298.67,
      date: new Date(2011, 2, 28),
    },
    {
      id: "e4",
      title: "New House (Mansion)",
      amount: 740.21,
      date: new Date(2021, 5, 12),
    },
  ];

  return (
    <Expenses expenses={expenses}/>
  );
}

export default TestExpense;
