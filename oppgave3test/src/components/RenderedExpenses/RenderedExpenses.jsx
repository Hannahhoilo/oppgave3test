
import React, { useState, useRef } from "react";

import styles from "./RenderedExpenses.module.css"


const RenderedExpenses = ({expenses, renderExpensesFromLocalStorage}) => {

  const handleDeleteExpense = (index) => {
    console.log(expenses[index].key)
    localStorage.removeItem(expenses[index].key)
    renderExpensesFromLocalStorage();
  }


  return (
    <>
      
      <div className={styles.rendered_expense_container}>
        <h2>Rendered Expenses:</h2>
        <p>Number of expenses: {expenses.length}</p>
        <ul>
          {expenses.map((expense, index) => (
            
            <li key={index}>
              <h3>{expense.value.expenseTitle}</h3>
              <p>Amount: {expense.value.expenseAmount}</p>
              <p>Date: {expense.value.expenseDate}</p>
              <p>Phone number: {expense.value.phoneNumber}</p>
              <p>Subject: {expense.value.subject}</p>
              <p>Message: {expense.value.message}</p>
              <p>Type of expense: {expense.value.format}</p>

              {/* Add more details here as needed */}
              <button onClick={() => handleDeleteExpense(index)} className={styles.delete_button}>Delete</button>
            </li>
          ))}
          
        </ul>
      </div>
    </>
  );
};

export default RenderedExpenses;
