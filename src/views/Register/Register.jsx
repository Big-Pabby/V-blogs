import React from 'react'
import { Link } from 'react-router-dom'
import './register.css'
import RegisterImage from '../../assets/images/register.svg'
import {BsFillShieldLockFill} from 'react-icons/bs'
import {HiMail} from 'react-icons/hi'
import {FaUserAlt} from 'react-icons/fa'

const Register = () => {
  return (
    <div className='login'>
        <div className="container">
          <div className="login-image">
            <img src={RegisterImage} alt="register svg" />
          </div>
          <h2>Create Your V-Blog Account</h2>
          <hr />
          <form className='login-form'>
            <div className='login-detail'>
              <label>
                <FaUserAlt/>
                <p>First Name</p>
              </label>
              <input type="text" placeholder='Enter Your First Name' />
            </div>
            <div className='login-detail'>
              <label>
                <FaUserAlt/>
                <p>Last Name</p>
              </label>
              <input type="text" placeholder='Enter Your Last Name' />
            </div>
            <div className='login-detail'>
              <label>
                <HiMail/>
                <p>Email</p>
              </label>
              <input type="email" placeholder='Enter Your Email' />
            </div>
            <div className='login-detail'>
              <label>
                <BsFillShieldLockFill/>
                <p>Password</p>
              </label>
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