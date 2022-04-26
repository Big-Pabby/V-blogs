import React from 'react'
import { Link } from 'react-router-dom'
import './register.css'
import RegisterImage from '../../assets/images/register.svg'

const Register = () => {
  return (
    <div className='login container'>
        <div className="login-page">
          <div className="login-image">
            <img src={RegisterImage} alt="register svg" />
          </div>
          <h2>Create Your V-Blog Account</h2>
          <hr />
          <form className='login-form'>
            <div className='login-detail'>
              <label>First Name</label>
              <input type="text" placeholder='Enter Your First Name' />
            </div>
            <div className='login-detail'>
              <label>Last Name</label>
              <input type="text" placeholder='Enter Your Last Name' />
            </div>
            <div className='login-detail'>
              <label>Email</label>
              <input type="email" placeholder='Enter Your Email' />
            </div>
            <div className='login-detail'>
              <label>Password</label>
              <input type="password" placeholder='Enter Your Password' />
            </div>
            <p>Already Have An Account? <Link to="/login">Login</Link></p>
            <button className='btn'>Register</button>
          </form>
        </div>
    </div>
  )
}

export default Register