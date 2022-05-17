import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom';
import './login.css'
import { Link } from 'react-router-dom'
import LoginImage from '../../assets/images/login.svg'
import {BsFillShieldLockFill} from 'react-icons/bs'
import {HiMail} from 'react-icons/hi';
import Loading from '../../Components/Loading/Loading'
import SuccessModal from '../../Components/ModalMessage/SuccessModal';
import ErrorModal from '../../Components/ModalMessage/ErrorModal';

const Login = ({logUser}) => {
  const [loginDetails, setLoginDetails] = useState({
    email: '',
    password: ''
  })
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [loader, setLoader] = useState(false);
  const [modal, setModal] = useState(false);
  const [errModal, setErrModal] = useState(false);

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
      const user = await res.json();
      if(user === 'Email is not registered') {
        setErrModal(true);
        setErrorMessage('Email is not registered');
        setTimeout(() => {
          setErrModal(false);
          setErrorMessage('')
        }, 5000)
      } else if (user === 'Invalid Password') {
        setErrModal(true);
        setErrorMessage('Invalid Password');
        setTimeout(() => {
          setErrModal(false);
          setErrorMessage('')
        }, 5000)
      } else if(user === 'unable to login'){
        setErrModal(true);
        setErrorMessage('Unable To Login');
        setTimeout(() => {
          setErrModal(false);
          setErrorMessage('')
        }, 5000)
      } else {
        logUser(user);
        setModal(true);
        setSuccessMessage('Login Successful');
        setTimeout(() => {
          setModal(false);
          setSuccessMessage('')
          history("/V-blogs")
        }, 5000)
      }

      setLoader(false);
    } else {
      setErrModal(true);
      setErrorMessage('All fields are required to login!!!');
      setTimeout(() => {
        setErrModal(false);
        setErrorMessage('')
      }, 5000)
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
        <p>Don't Have An Account? <Link to="/register">Register</Link></p>
        <button type='button' onClick={onLogin} className='btn'>LOGIN</button>
      </form>
    </div>
    <Loading loader={loader} />
    <SuccessModal modal={modal} message={successMessage} />
    <ErrorModal errModal={errModal} message={errorMessage} />
  </div>
  )
}

export default Login