import React, { useState, useEffect } from 'react'
import "./AddTransactions.css"
import axios from 'axios'
import toast, { Toaster } from 'react-hot-toast'
import logoimg from "../LogIn/tracker_logo.png"

function AddTransactions() {
  const [user, setUser] = useState("")
  const [title, setTitle] = useState("")
  const [amount, setAmount] = useState(0)
  const [type, setType] = useState("credit")
  const [category, setCategory] = useState("learning")
  useEffect(() => {
    const currentUser = JSON.parse(localStorage.getItem("currentUser"));
    if (currentUser) {
      setUser(currentUser)
    }
    if (!currentUser) {
      window.location.href = '/login'
    }
  }, [])

  const addTransaction = async () => {
    const response = await axios.post(`${process.env.REACT_APP_API_URL}/transactions`, {
      title,
      amount,
      type,
      category,
      user: user._id
    })
    toast.success(response.data.message)

    setTitle("")
    setAmount(0)
    setType("credit")
    setCategory("learning")

    setTimeout(() => {
      window.location.href = "/"
    }, 2000)
  }
  return (
    <div className='add-transaction-container'>
      <h3 className='add-transactins-title'>
        <img src={logoimg} className='Logo-icon' />
        Add Transaction For
      </h3>
      <h1 className='user-name'>{user.fullName}</h1>

      <form className='add-transaction-form'>
        <input
          type='text'
          placeholder='Title'
          className='add-transaction-input'
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type='text'
          placeholder='Amount'
          className='add-transaction-input'
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
        <select className='add-transaction-input'
          value={type}
          onChange={(e) => setType(e.target.value)}>

          <option value="credit">Income</option>
          <option value="debit">Expense</option>
        </select>

        <select className='add-transaction-input'
          value={category}
          onChange={(e) => setCategory(e.target.value)}>

          <option value="food">Food</option>
          <option value="rent">Rent</option>
          <option value="utilities">Utilities</option>
          <option value="transportation">transportation</option>
          <option value="entertainment">Entertainment</option>
          <option value="clothing">Clothing</option>
          <option value="health">Health</option>
          <option value="salary">Salary</option>
          <option value="learning">Learning</option>
        </select>

        <button type='button' className='add-transaction-button' onClick={addTransaction}>Add Transaction</button>


      </form>
      <Toaster />
    </div>
  )
}

export default AddTransactions