import React from 'react'
import './login.css'
import { Link } from 'react-router-dom'
import LoginImage from '../../assets/images/login.svg'

const Login = () => {

  return (
    <div className='login container'>
        <div className="login-page">
          <div className="login-image">
            <img src={LoginImage} alt="login svg" />
          </div>
          <h2>Login to V-Blog</h2>
          <hr />
          <form className='login-form'>
            <div className='login-detail'>
              <label>Email</label>
              <input type="email" placeholder='Enter Your Email' />
            </div>
            <div className='login-detail'>
              <label>Password</label>
              <input type="password" placeholder='Enter Your Password' />
            </div>
            <p>Don't Have An Account? <Link to="/register">Register</Link></p>
            <button className='btn'>LOGIN</button>
          </form>
        </div>
    </div>
  )
}

export default Login