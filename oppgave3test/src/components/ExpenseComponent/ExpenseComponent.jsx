import React, { useState, useRef } from "react";
import styles from "./ExpenseComponent.module.css";

const ExpenceComponent = () => {
  const [userData, setUserData] = useState({
    expenseTitle: "",
    expenseAmount: "",
    expenceDate: "",
    phoneNumber: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState({
    expenseTitleError: "",
    expenseAmountError: "",
    expenceDateError: "",
    phoneNumberError: "",
    subjectError: "",
    messageError: "",
  });

  const [expenses, setExpenses] = useState([]);

  const textAreaElement = useRef(null);

  const validateForm = () => {
    const clonedErrors = { ...errors };
    // Validation logic remains the same...
    setErrors(clonedErrors);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setErrors((prevErrors) => ({
      ...prevErrors,
      [`${name}Error`]: "",
    }));
    setUserData((prev) => ({ ...prev, [name]: value }));
    if (name === "message" && value.length >= 300) {
      setErrors((prev) => ({
        ...prev,
        messageErrors: "Maximum characters allowed is 300!",
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    validateForm();
    if (Object.values(errors).every((error) => !error)) {
      const newExpense = {
        title: userData.expenseTitle,
        amount: userData.expenseAmount,
        date: userData.expenceDate,
        phoneNumber: userData.phoneNumber,
        subject: userData.subject,
        message: userData.message,
      };
      setExpenses((prevExpenses) => [...prevExpenses, newExpense]);
      setUserData({
        expenseTitle: "",
        expenseAmount: "",
        expenceDate: "",
        phoneNumber: "",
        subject: "",
        message: "",
      });
    }
  };

  return (
    <div>
      <form className={styles.form_element} onSubmit={handleSubmit}>
        <fieldset className={styles.contact_form_container}>
          <legend>Expense Tracker! ☁️</legend>

          <div className={styles.input_group}>
            <label htmlFor="expenseTitle">
              Expence title<sup>*</sup>
            </label>
            <input
              type="text"
              name="expenseTitle"
              placeholder="Enter your expense title"
              className={styles.input_element}
              value={userData.expenseTitle}
              onChange={handleChange}
            />
            <p>{errors.expenseTitleError}</p>
          </div>

          <div className={styles.input_group}>
            <label htmlFor="expenseAmount">
              Expense Amount<sup>*</sup>
            </label>
            <input
              type="text"
              name="expenseAmount"
              placeholder="Enter your expense amount"
              className={styles.input_element}
              value={userData.expenseAmount}
              onChange={handleChange}
            />
            <p>{errors.expenseAmountError}</p>
          </div>

          <div className={styles.input_group}>
            <label htmlFor="expenceDate">
              Expense Date<sup>*</sup>
            </label>
            <input
              type="date"
              name="expenceDate"
              placeholder="Enter your Expense Date"
              className={styles.input_element}
              value={userData.expenceDate}
              onChange={handleChange}
            />
            <p>{errors.expenceDateError}</p>
          </div>

          <div className={styles.input_group}>
            <label htmlFor="phoneNumber">Phone number</label>
            <input
              type="text"
              name="phoneNumber"
              placeholder="Enter your phone number"
              className={styles.input_element}
              value={userData.phoneNumber}
              onChange={handleChange}
            />
            <p>{errors.phoneNumberError}</p>
          </div>

          <div className={styles.input_group}>
            <label htmlFor="subject">Subject</label>
            <input
              type="text"
              name="subject"
              placeholder="Enter the subject"
              className={styles.input_element}
              value={userData.subject}
              onChange={handleChange}
            />
            <p>{errors.subjectError}</p>
          </div>

          <div className={styles.input_group}>
            <label htmlFor="format">Type of expence</label>
            <select
              name="format"
              class="format"
              className={styles.input_element}
              onChange={handleChange}
              required
            >
              <option value="housing">Housing</option>
              <option value="grocery">Grocery</option>
              <option value="transportation">Transportation</option>
              <option value="clothes">Clothes</option>
              <option value="other">Other</option>
            </select>
          </div>

          <div className={styles.input_group}>
            <label htmlFor="message">
              Message<sup>*</sup>
            </label>
            <textarea
              name="message"
              cols="30"
              rows="10"
              placeholder="Max characters 300"
              maxLength={300}
              className={styles.textarea_element}
              ref={textAreaElement}
              value={userData.message}
              onChange={handleChange}
            ></textarea>
            <div className={styles.message_error_and_count}>
              <p>{errors.messageError}</p>
              <p>
                Message count:{" "}
                {textAreaElement.current
                  ? textAreaElement.current.value.length
                  : 0}{" "}
                / 300
              </p>
            </div>
          </div>

          <button className={styles.submit_button}>Submit</button>
        </fieldset>

        <div className={styles.rendered_expence_container}>
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
                <p>Type of expence: {expense.format}</p>
                
                {/* Add more details here as needed */}
              </li>
            ))}
          </ul>
        </div>
      </form>
    </div>
  );
};

export default ExpenceComponent;
