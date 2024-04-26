
import React, { useState, useRef } from "react";

import styles from "./RenderedExpenses.module.css"


const RenderedExpenses = ({expenses}) => {


  return (
    <>
      <div>RenderedExpenses</div>
      <div className={styles.rendered_expense_container}>
        <h2>Rendered Expenses:</h2>
        <ul>
          {expenses.map((expense, index) => (
            <li key={index}>
              <h3>{expense.title}</h3>
              <p>Amount: {expense.amount}</p>
              <p>Date: {expense.date}</p>
              <p>Phone number: {expense.phoneNumber}</p>
              <p>Subject: {expense.subject}</p>
              <p>Message: {expense.message}</p>
              <p>Type of expense: {expense.format}</p>

              {/* Add more details here as needed */}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default RenderedExpenses;
