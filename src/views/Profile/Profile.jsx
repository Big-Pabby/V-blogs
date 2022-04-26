import React from 'react'
import './profile.css'
import Welcome from '../../assets/images/welcome.svg'
import {BsFillShieldLockFill} from 'react-icons/bs'
import {HiMail} from 'react-icons/hi'
import {FaUserAlt} from 'react-icons/fa'

const Profile = () => {
  return (
    <div className='profile container'>
      <div className="profile-image">
        <img src={Welcome} alt="welcome" />
        <h4>Victor Adekunle</h4>
        <h4>victoradekunle312@gmail.com</h4>
      </div>
      <h1>Account Setting</h1>
      <hr />
      <form className='login-form'>
        <div className='login-detail'>
          <label>
            <FaUserAlt/>
            <p>First Name</p>
          </label>
          <input type="text" placeholder='Victor' />
        </div>
        <div className='login-detail'>
          <label>
            <FaUserAlt/>
            <p>Last Name</p>
          </label>
          <input type="text" placeholder='Adekunle' />
        </div>
        <div className='login-detail'>
          <label>
            <HiMail/>
            <p>Email</p>
          </label>
          <input type="email" placeholder='victoradekunle312@gmail.com' />
        </div>
        <div className='login-detail'>
          <label>
            <BsFillShieldLockFill/>
            <p>Old Password</p>
          </label>
          <input type="password" placeholder='Enter Your Password' />
        </div>
        <div className='login-detail'>
          <label>
            <BsFillShieldLockFill/>
            <p>New Password</p>
          </label>
          <input type="password" placeholder='Enter Your Password' />
        </div>
        <div className="profile-btn">
          <button className='btn'>Change Setting</button>
        </div>
      </form>
    </div>
  )
}

export default Profile