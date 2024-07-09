import React from 'react'
import "./SignIn.css"
import {Link, useNavigate} from 'react-router-dom'

function SignIn() {
  const navigate=useNavigate()
  const handleLogin=()=>{
    navigate('/')
  }
  return (
    <div>
      <h1 className='text-center my-5'>Login</h1>
      <form onSubmit={handleLogin}>
      <div className='d-flex mb-3 field'>
        <label htmlFor='username' className='form-label' >Username:</label>
        <input type='text' id='username' className='form-control w-50' required></input>
      </div>
      <div className='d-flex mb-3 field'>
        <label htmlFor='password' className='form-label' >Password:</label>
        <input type='password' id='password' className='form-control w-50' required></input>
      </div>
      <div className='text-center mt-5'>
        <button className='btn btn-primary'>Login</button>
      </div>
      </form>
      <p className='text-center mb-5'>New User! <Link to='/signup'>Register</Link> here</p>
      
    </div>
  )
}

export default SignIn