  import React from 'react'
  import "./SignUp.css"
  import { Link, useNavigate } from 'react-router-dom'
  function SignUp() {
    const navigate = useNavigate()
    const handleRegister = () => {
      navigate('/signin');
    };
  
    return (
      <div>
        <h1 className='text-center my-5'>Register</h1>
        <form onSubmit={handleRegister}>
        <div className='d-flex mb-3 field'>
          <label htmlFor='username' className='form-label' >Username:</label>
          <input type='text' id='username' className='form-control w-50' required></input>
        </div>
        <div className='d-flex mb-3 field'>
          <label htmlFor='email' className='form-label' >EmailID:</label>
          <input type='email' id='email' className='form-control w-50' required></input>
        </div>
        <div className='d-flex field mb-3'>
          <label htmlFor='gender'>Gender:</label>
          <div>
            <input type='radio' name='gender' id='male' className='form-control-radio'></input>
            <label htmlFor='male'  className='form-label ms-1 me-4'>Male</label>
            <input type='radio' name='gender' id='female' className='form-control-radio'></input>
            <label htmlFor='female' className='form-label ms-1 me-4'>Female</label>
          </div>
        </div>
        <div className='d-flex mb-3 field'>
          <label htmlFor='password' className='form-label' >Password:</label>
          <input type='password' id='password' className='form-control w-50' required></input>
        </div>
        <div className='d-flex mb-3 field'>
          <label htmlFor='confirmPassword' className='form-label' >Confirm Password:</label>
          <input type='password' id='confirmPassword' className='form-control w-50'></input>
        </div>
        <div className='text-center mt-5'>
          <button className='btn btn-primary'>Register</button>
        </div>
        </form>
        <p className='text-center mb-5'>If already registered please <Link to='/signin'>Login</Link></p>
      </div>
    )
  }

  export default SignUp