import React, { useState } from 'react'
import "./SignUp.css"
import axios from 'axios'
import toast, { Toaster } from "react-hot-toast"

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
        fullName: "",
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
    <div>
      <h1 className='signup-heading'>User Registration</h1>

      <form className='signup-form'>
        <input
          type='text'
          placeholder='Full Name'
          className='user-input'
          value={user.fullname}
          onChange={(e) => {
            setUser({ ...user, fullname: e.target.value })
          }}
        />

        <input
          type='email'
          placeholder=' Enter Email'
          className='user-input'
          value={user.email}
          onChange={(e) => {
            setUser({ ...user, email: e.target.value })
          }}
        />

        <input
          type='password'
          placeholder='Enter Password'
          className='user-input'
          value={user.password}
          onChange={(e) => {
            setUser({ ...user, password: e.target.value })
          }}
        />

        <input
          type='date'
          placeholder='Date of Birth'
          className='user-input'
          value={user.dob}
          onChange={(e) => {
            setUser({ ...user, dob: e.target.value })
          }}
        />

        <button
          type='button'
          className='btn-auth'
          onClick={signup}
        >Register
        </button>

      </form>
      <Toaster />
    </div>
  )
}

export default SignUp