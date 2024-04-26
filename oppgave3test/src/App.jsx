import { useState } from "react";
import "./App.css";
import ExpenceComponent from "./components/ExpenseComponent/ExpenseComponent";
import styles from "./App.module.css";
import RenderedExpenses from "./components/RenderedExpenses/RenderedExpenses";


function App() {
  return (
    <>
      <div className={styles.main_container}>
        <h1>Expense Tracker!</h1>
        <ExpenceComponent></ExpenceComponent>
        <RenderedExpenses></RenderedExpenses>
      </div>
    </>
  );
}

export default App;
