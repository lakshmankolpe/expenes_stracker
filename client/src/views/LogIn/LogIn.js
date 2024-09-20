import React, { useState } from 'react'
import "./LogIn.css";
import { Link } from "react-router-dom"
import axios from 'axios';
import toast, { Toaster } from 'react-hot-toast';
import logoimg from "./tracker_logo.png"

function LogIn() {

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const loginNow = async () => {
    const response = await axios.post(`${process.env.REACT_APP_API_URL}/login`, {
      email: email,
      password: password
    })
    
    if (response.data.success) {
      toast.success(response.data.message)
      localStorage.setItem('currentUser', JSON.stringify(response.data.data))
      toast.loading("Redirecting to dashboard");
      setTimeout(() => {
        window.location.href = '/'
      }, 3000)
    }
    else {
      toast.error(response.data.message)
    }
 }

  return (
    <>
      <div className='login-main-container'>
        <div className='welcome-text-container'>

          <h1 className='welcome-heading1'>
            <img src={logoimg} className='logo-icon' />Welcome</h1>
          <h1 className='welcome-heading2'>Expanse Tracker</h1>
          <p className='paragraph-text1'>Welcome to Expanse Tracker! Your go-to app for managing and tracking expenses effortlessly.</p>
          <p className='paragraph-text2'> Stay on top of your finances with ease and gain valuable insights into your spendi habits.Organize your expenses, set budgets, and achieve your financial goals with Expanse Tracker.</p>
          <p className='welcome-heading'>:::::</p>
        </div>

        <div className='form-main-container'>

          <h1 className='login-headining'>
            <img src={logoimg} className='logo-icon-logo' /> User Login </h1>

          <form className='login-form'>

            <input
              type='email'
              placeholder='Enter Email'
              className='login-input'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type='password'
              placeholder=' Enter Password'
              className='login-input'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <span className='checkbox-text'>
              <input type="checkbox" />
              Keep me logged in
            </span>


            <button
              type='button'
              onClick={loginNow}
              className='login-button'>
              Login in Now
            </button>

          </form>
          <a href="https://support.google.com/accounts/answer/41078?hl=en&co=GENIE.Platform%3DDesktop" className='forgot-pass-text'>Forgot Password</a>
          <Link to="/signup" className='auth-link'> Don't have an account? Signup</Link>
        </div>

        <Toaster />
      </div>
    </>
  )
}

export default LogIn