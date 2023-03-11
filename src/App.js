import ExpenseItem from './components/ExpenseItem';

function App() {
  let expense = [
    {
      id: 1,
      title: 'School Fee',
      amount: 200,
      date: new Date(2023, 5, 14),
    },
    {
      id: 1,
      title: 'Car Repairing',
      amount: 400,
      date: new Date(2022, 1, 11),
    },
    {
      id: 1,
      title: 'Grocery',
      amount: 300,
      date: new Date(2020, 11, 31),
    },
  ];

  let expenseDate = new Date(2020, 12, 1);
  let expenseTitle = 'School Fee';
  let expenseAmount = 200;
  return (
    <div>
      <h2>Lets get Started</h2>
      <ExpenseItem
        date={expense[0].date}
        title={expense[0].title}
        amount={expense[0].amount}
      />
      <ExpenseItem
        date={expense[1].date}
        title={expense[1].title}
        amount={expense[1].amount}
      />
      <ExpenseItem
        date={expense[2].date}
        title={expense[2].title}
        amount={expense[2].amount}
      />
    </div>
  );
}
export default App;
