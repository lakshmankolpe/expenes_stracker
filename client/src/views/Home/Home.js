import React, { useEffect, useState } from "react";
import "./Home.css";
import toast, { Toaster } from "react-hot-toast";
import axios from "axios";
import TransactionsCard from "./../../components/TransactionsCard/TransactionsCard.js";
import addIcon from "./addicon.png";
import { Link } from "react-router-dom";

function Home() {
  const [user, setUser] = useState("");
  const [transactions, setTransactions] = useState([]);
  const [netIncome, setNetIncome] = useState(0);
  const [netExpense, setExpense] = useState(0);

  useEffect(() => {
    const currentUser = JSON.parse(localStorage.getItem("currentUser"));
    if (currentUser) {
      setUser(currentUser);
    }
    if (!currentUser) {
      window.location.href = "/login";
    }
  }, []);

  const loadTransactions = async () => {
    if (!user._id) {
      return;
    }
    toast.loading("Loading Transaction...");

    const response = await axios.get(
      `${process.env.REACT_APP_API_URL}/transactions?userId=${user._id}`
    );
    const allTransactions = response.data.data;
    toast.dismiss();
    setTransactions(allTransactions);
  };
  useEffect(() => {
    loadTransactions();
  }, [user]);

  useEffect(() => {
    let income = 0;
    let expense = 0;
    transactions.forEach((transaction) => {
      if (transaction.type === "credit") {
        income += transaction.amount;
      } else {
        expense += transaction.amount;
      }
    });
    setNetIncome(income);
    setExpense(expense);
  }, [transactions]);

  return (
    <div>
      <span className="home-greating">
        Hello <span className="user-name">{user.fullName} </span>
        Welcome To The Expense Tracker
      </span>

      <span
        className="home-logout"
        onClick={() => {
          localStorage.clear();
          toast.success("Logout successfully");
          setTimeout(() => {
            window.location.href = "./login";
          }, 3000);
        }}
      >
        Logout
      </span>

      <div className="net-transactins-value">
        <div className="net-transactins-value-item">
          <span className="net-transactins-value-amount net-icome-text">
            +{netIncome}
          </span>
          <span className="net-transactins-value-title net-icome-text">
            Net Income
          </span>
        </div>

        <div className="net-transactins-value-item">
          <span className="net-transactins-value-amount">
            {netIncome - netExpense}
          </span>
          <span className="net-transactins-value-title">Net Balance</span>
        </div>

        <div className="net-transactins-value-item">
          <span className="net-transactins-value-amount net-expense-text">-{netExpense}</span>
          <span className="net-transactins-value-title net-expense-text">Net Expense</span>
        </div>
      </div>

      <div className="transactios-container">
        {transactions.map((transaction) => {
          const { _id, title, amount, type, category, createdAt } = transaction;
          return (
            <TransactionsCard
              key={_id}
              _id={_id}
              title={title}
              amount={amount}
              type={type}
              category={category}
              createdAt={createdAt}
              loadTransactions={loadTransactions}
            />
          );
        })}
      </div>
      <div className="add-transactions-container">
        <Link to="/addtransactions" className="add-transactions-link">
          <img src={addIcon} alt="add-icon" className="add-transactions" />
          <span className="hover-text">Add Transaction</span>
        </Link>
      </div>

      <Toaster />
    </div>
  );
}

export default Home;
