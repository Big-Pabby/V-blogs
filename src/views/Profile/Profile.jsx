import React, {useState} from 'react'
import './profile.css'
import Welcome from '../../assets/images/welcome.svg'
import {BsFillShieldLockFill} from 'react-icons/bs'
import {HiMail} from 'react-icons/hi'
import {FaUserAlt} from 'react-icons/fa'

const Profile = ({user}) => {
  const [updateUser, setUpdateUser] = useState({
    firstName: user.firstname,
    lastName: user.lastname,
    email: user.email,
    password: '',
    confirmPassword: ''
  })

  const changefirstName = (e) => {
    setUpdateUser({...updateUser, firstName: e.target.value})
  }

  const changelastName = (e) => {
    setUpdateUser({...updateUser, lastName: e.target.value})
  }

  const changeEmail = (e) => {
    setUpdateUser({...updateUser, email: e.target.value})
  }

  const oldPassword = (e) => {
    setUpdateUser({...updateUser, password: e.target.value})
  }

  const saveChanges = () => {
    console.log(updateUser)
  }


  return (
    <div className='profile'>
      <div className="container">
        <div className="profile-image">
          <img src={Welcome} alt="welcome" />
          <h4>{user.firstname} {user.lastname}</h4>
          <h4>{user.email}</h4>
        </div>
        <h1>Account Setting</h1>
        <hr />
        <form className='login-form'>
          <div className='login-detail'>
            <label>
              <FaUserAlt/>
              <p>First Name</p>
            </label>
            <input type="text" onChange={changefirstName} value={updateUser.firstName} />
          </div>
          <div className='login-detail'>
            <label>
              <FaUserAlt/>
              <p>Last Name</p>
            </label>
            <input type="text" onChange={changelastName} value={updateUser.lastName} />
          </div>
          <div className='login-detail'>
            <label>
              <HiMail/>
              <p>Email</p>
            </label>
            <input type="email" onChange={changeEmail} value={updateUser.email} />
          </div>
          <div className='login-detail'>
            <label>
              <BsFillShieldLockFill/>
              <p>Old Password</p>
            </label>
            <input type="password" onChange={oldPassword} placeholder='Enter Your Password' />
          </div>
          <div className='login-detail'>
            <label>
              <BsFillShieldLockFill/>
              <p>New Password</p>
            </label>
            <input type="password" placeholder='Enter Your Password' />
          </div>
          <div className="profile-btn">
            <button type='button' onClick={saveChanges} className='btn'>Change Setting</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Profile