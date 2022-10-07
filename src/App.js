import ExpenseItem from "./components/ExpenseItem";

function App() {
  return (
    <div>
      <h2>Hello World</h2>

      <ExpenseItem
        date="March 28th 2022"
        title="Car Insurance"
        price="294.76"
      />

      <ExpenseItem
        date="March 29th 2022"
        title="Homework"
        price="288.80"
      />

      <ExpenseItem
        date="March 30th 2022"
        title="Pay Taxes"
        price="304.25"
      />
    </div>
  );
}

export default App;
