import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
import './register.css'
import RegisterImage from '../../assets/images/register.svg'
import {BsFillShieldLockFill} from 'react-icons/bs'
import {HiMail} from 'react-icons/hi'
import {FaUserAlt} from 'react-icons/fa'
import Loading from '../../Components/Loading/Loading'

const Register = () => {
  const [registerUser, setRegisterUser] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  })
  const [errorMessage, setErrorMessage] = useState('')
  const [Loader, setLoader] = useState(false)

  const history = useNavigate();

  const registerFirstname = (e) => {
    setRegisterUser({...registerUser, firstName: e.target.value})
  }

  const registerLastname = (e) => {
    setRegisterUser({...registerUser, lastName: e.target.value})
  }

  const registerEmail = (e) => {
    setRegisterUser({...registerUser, email: e.target.value})
  }

  const registerPassword = (e) => {
    setRegisterUser({...registerUser, password: e.target.value})
  }

  const onRegister = async () => {
    if(registerUser.firstName !== '' && registerUser.lastName !== '' && registerUser.email !== '' && registerUser.password !== '') {
      setLoader(true)
      const res = await fetch('https://secure-taiga-11377.herokuapp.com/register', {
          method: 'post',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify({
              firstName: registerUser.firstName,
              lastName: registerUser.lastName,
              email: registerUser.email,
              password: registerUser.password
          })
      })
      setTimeout(() => {
        setLoader(false);
      }, 5000)
      const user = await res.json()
      console.log(user)
      if(user === 'email already exist') {
        setErrorMessage('Email already exist')
      } else {
        history('/login')
      }
    } else {
      setErrorMessage('All fields are required to register')
    }
  }

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
              <input type="text" onChange={registerFirstname} placeholder='Enter Your First Name' />
            </div>
            <div className='login-detail'>
              <label>
                <FaUserAlt/>
                <p>Last Name</p>
              </label>
              <input type="text" onChange={registerLastname} placeholder='Enter Your Last Name' />
            </div>
            <div className='login-detail'>
              <label>
                <HiMail/>
                <p>Email</p>
              </label>
              <input type="email" onChange={registerEmail} placeholder='Enter Your Email' />
            </div>
            <div className='login-detail'>
              <label>
                <BsFillShieldLockFill/>
                <p>Password</p>
              </label>
              <input type="password" onChange={registerPassword} placeholder='Enter Your Password' />
            </div>
            <p className='error-msg'>{errorMessage}</p>
            <p>Already Have An Account? <Link to="/login">Login</Link></p>
            <button type='button' onClick={onRegister} className='btn'>Register</button>
          </form>
        </div>
        <Loading loader={Loader} />
    </div>
  )
}

export default Register