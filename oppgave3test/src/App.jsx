import { useState, useEffect } from "react";
import "./App.css";
import styles from "./App.module.css";
import ExpenseComponent from "./components/ExpenseComponent/ExpenseComponent";
import RenderedExpenses from "./components/RenderedExpenses/RenderedExpenses";

function App() {
  const [expenses, setExpenses] = useState([]);

  const renderExpensesFromLocalStorage = () => {
    const keys = Object.keys(localStorage);
    const entries = keys.map((key) => {
      return {
        key: key,
        value: JSON.parse(localStorage.getItem(key)),
      };
    });
    setExpenses(entries);
    console.log(expenses);
  };

  useEffect(() => {
    renderExpensesFromLocalStorage();
  }, []);

  return (
    <>
      <div className={styles.main_container}>
        <h1>Expense Tracker!</h1>
        <div className={styles.main_components_container}>
          <ExpenseComponent
            renderExpensesFromLocalStorage={renderExpensesFromLocalStorage}
          />
          <RenderedExpenses
            renderExpensesFromLocalStorage={renderExpensesFromLocalStorage}
            expenses={expenses}
          />
        </div>
      </div>
    </>
  );
}

export default App;
