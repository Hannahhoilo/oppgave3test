import { useState } from "react";
import "./App.css";
import styles from "./App.module.css";
import ExpenseComponent from "./components/ExpenseComponent/ExpenseComponent";


function App() {
  return (
    <>
      <div className={styles.main_container}>
        <h1>Expense Tracker!</h1>
        <ExpenseComponent></ExpenseComponent>
        
      </div>
    </>
  );
}

export default App;