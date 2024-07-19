import React, { useEffect, useState } from 'react'
import "./Home.css"
import toast, { Toaster } from "react-hot-toast"
import axios from "axios"
import TransactionsCard from "./../../components/TransactionsCard/TransactionsCard.js"
import addIcon from "./addicon.png"
import { Link } from 'react-router-dom'



function Home() {
  const [user, setUser] = useState("");
  const [transactions, setTransactions] = useState([]);
  const [netIncome, setNetIncome] = useState(0)
  const [netExpense, setExpense] = useState(0)




  useEffect(() => {
    const currentUser = JSON.parse(localStorage.getItem("currentUser"));
    if (currentUser) {
      setUser(currentUser)
    }
    if (!currentUser) {
      window.location.href = '/login'
    }
  }, [])

  const loadTransactions = async () => {
    if (!user._id) {
      return
    }
    toast.loading("Loading Transaction...")

    const response = await axios.get(`${process.env.REACT_APP_API_URL}/transactions?userId=${user._id}`)
     const allTransactions=response.data.data  
    toast.dismiss()
    setTransactions(allTransactions)
  }
  useEffect(() => {
    loadTransactions()
  }, [user])

  useEffect(() => {
    let income = 0
    let expense = 0
    transactions.forEach((transaction) => {
      if (transaction.type === 'credit') {
        income += transaction.amount
      }
      else {
        expense += transaction.amount
      }
    })
    setNetIncome(income)
    setExpense(expense)

  }, [transactions])


  return (
    <div>
      <h1 className='home-greating'> Hello {user.fullName}</h1>
      <h2 className='home-heading'> Welcome to the Expense Tracker</h2>
      <span className='home-logout' onClick={() => {
        localStorage.clear()
        toast.success('Log out successfully')
        setTimeout(() => {
          window.location.href = "./login"
        }, 3000);
      }}>
        Logout
      </span>

      <div className='net-transactins-value'>

        <div className='net-transactins-value-item'>
          <span className='net-transactins-value-amount'>
            +{netIncome}
          </span>
          <span className='net-transactins-value-title'>
            Net Income
          </span>
        </div>

        <div className='net-transactins-value-item'>
          <span className='net-transactins-value-amount'>
            -{netExpense}
          </span>
          <span className='net-transactins-value-title'>
            Net Expense
          </span>
        </div>

        <div className='net-transactins-value-item'>
          <span className='net-transactins-value-amount'>
            {netIncome - netExpense}
          </span>
          <span className='net-transactins-value-title'>
            Net Balance
          </span>
        </div>


      </div>

      <div className='transactios-container'>
        {
          transactions.map((transaction) => {
            const { _id, title, amount, type, category, createdAt } = transaction
            return (<TransactionsCard
              key={_id}
              _id={_id}
              title={title}
              amount={amount}
              type={type}
              category={category}
              createdAt={createdAt}
              loadTransactions={loadTransactions}
            />)
          })
        }
      </div>
      <Link to="/addtransactions">
        <img src={addIcon} alt='add-icon' className='add-transactions' />
      </Link>
      <Toaster />
    </div>
  )
}

export default Home