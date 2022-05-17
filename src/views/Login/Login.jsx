import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom';
import './login.css'
import { Link } from 'react-router-dom'
import LoginImage from '../../assets/images/login.svg'
import {BsFillShieldLockFill} from 'react-icons/bs'
import {HiMail} from 'react-icons/hi';
import Loading from '../../Components/Loading/Loading'

const Login = ({logUser}) => {
  const [loginDetails, setLoginDetails] = useState({
    email: '',
    password: ''
  })
  const [errorMessage, setErrorMessage] = useState('');
  const [loader, setLoader] = useState(false)

  const history = useNavigate()
  const inputEmail = (e) => {
    setLoginDetails({...loginDetails, email: e.target.value})
  }
  const inputPassword = (e) => {
    setLoginDetails({...loginDetails, password: e.target.value})
  }

  const onLogin = async () => {
    if(loginDetails.email !== '' && loginDetails.password !== '') {
      setLoader(true)
      const res = await fetch('https://secure-taiga-11377.herokuapp.com/login', {
          method: 'post',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify({
              email: loginDetails.email,
              password: loginDetails.password
          })
      })
      setTimeout(() => {
        setLoader(false);
      }, 5000)
      const user = await res.json();
      if(user === 'Email is not registered') {
        setErrorMessage('Email is not registered')
      } else if (user === 'Invalid Password') {
        setErrorMessage('Invalid Password')
      } else if(user === 'unable to login'){
        setErrorMessage('unable to login')
      }else {
        console.log(user)
        logUser(user);
        history("/")
      }
    } else {
      setErrorMessage('All fields are required to login to account')
    }
  }

  return (
  <div className='login'>
    <div className="container">
      <div className="login-image">
        <img src={LoginImage} alt="login svg" />
      </div>
      <h2>Login to V-Blog</h2>
      <hr />
      <form className='login-form'>
        <div className='login-detail'>
          <label>
            <HiMail/>
            <p>Email</p>
          </label>
          <input type="email" onChange={inputEmail} placeholder='Enter Your Email' />
        </div>
        <div className='login-detail'>
          <label>
            <BsFillShieldLockFill/>
            <p>Password</p>
          </label>
          <input type="password" onChange={inputPassword} placeholder='Enter Your Password' />
        </div>
        <p className='error-msg'>{errorMessage}</p>
        <p>Don't Have An Account? <Link to="/register">Register</Link></p>
        <button type='button' onClick={onLogin} className='btn'>LOGIN</button>
      </form>
    </div>
    <Loading loader={loader} />
  </div>
  )
}

export default Login