import React, { useState } from 'react'
import "./SignUp.css"
import axios from 'axios'
import toast, { Toaster } from "react-hot-toast"
import { Link } from 'react-router-dom';
import logoimg from "../LogIn/tracker_logo.png"
function SignUp() {

  const [user, setUser] = useState({
    fullname: "",
    email: "",
    password: "",
    dob: "",


  });
  const signup = async () => {
    const response = await axios.post(`${process.env.REACT_APP_API_URL}/signup`, {
      fullName: user.fullname,
      email: user.email,
      password: user.password,
      dob: user.dob
    })
    if (response.data.success) {
      toast.success(response.data.message)
      setUser({
        fullname: "",
        email: "",
        password: "",
        dob: ""
      })
    }
    else {
      toast.error(response.data.message)
    }
  }


  return (
    <div className='signup-main-container'>
      <h1 className='signup-headining'>
      <img src={logoimg} className='Logo-icon' />User Registration</h1>

      <form className='signup-form'>
        <input
          type='text'
          placeholder='Full Name'
          className='signup-input'
          value={user.fullname}
          onChange={(e) => {
            setUser({ ...user, fullname: e.target.value })
          }}
        />

        <input
          type='email'
          placeholder=' Enter Email'
          className='signup-input'
          value={user.email}
          onChange={(e) => {
            setUser({ ...user, email: e.target.value })
          }}
        />

        <input
          type='password'
          placeholder='Enter Password'
          className='signup-input'
          value={user.password}
          onChange={(e) => {
            setUser({ ...user, password: e.target.value })
          }}
        />

        <input
          type='date'
          placeholder='Date of Birth'
          className='signup-input'
          value={user.dob}
          onChange={(e) => {
            setUser({ ...user, dob: e.target.value })
          }}
        />

        <button
          type='button'
          className='registration-button'
          onClick={signup}
        >Register
        </button>

      </form>
      <Toaster />
      <Link to="/login" className='auth-link'>Already have an account? Login</Link>
    </div>
  )
}

export default SignUp