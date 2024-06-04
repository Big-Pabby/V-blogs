import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
import './register.css'
import RegisterImage from '../../assets/images/register.svg'
import {BsFillShieldLockFill} from 'react-icons/bs'
import {HiMail} from 'react-icons/hi'
import {FaUserAlt} from 'react-icons/fa'
import Loading from '../../Components/Loading/Loading'
import SuccessModal from '../../Components/ModalMessage/SuccessModal';
import ErrorModal from '../../Components/ModalMessage/ErrorModal';
import Logo from '../../Components/Logo/Logo';

const Register = () => {
  const [registerUser, setRegisterUser] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  })
  const [errorMessage, setErrorMessage] = useState('')
  const [successMessage, setSuccessMessage] = useState('')
  const [Loader, setLoader] = useState(false);
  const [modal, setModal] = useState(false);
  const [errModal, setErrModal] = useState(false);

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
      const res = await fetch('https://taste-element-api-1.onrender.com/register', {
          method: 'post',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify({
              firstName: registerUser.firstName,
              lastName: registerUser.lastName,
              email: registerUser.email,
              password: registerUser.password
          })
      })
      const user = await res.json()
      if(user === 'email already exist') {
        setErrModal(true);
        setErrorMessage('Email Already Exists');
        setTimeout(() => {
          setErrModal(false);
          setErrorMessage('')
        }, 5000)
      } else {
        setModal(true);
        setSuccessMessage('Registration Was Successful');
        setTimeout(() => {
          setModal(false);
          setSuccessMessage('')
          history("/V-blogs")
        }, 5000)
      }
      setLoader(false)
    } else {
      setErrModal(true);
        setErrorMessage('All fields are required to register!!!');
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
            <img src={RegisterImage} alt="register svg" />
          </div>
          <div className="login-heading">
            <Logo />
            <h2>Sign up</h2>
            <p>Create a free account</p>
          </div>
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
            <button type='button' onClick={onRegister} className='btn'>Register</button>
            <p>Already Have An Account? <Link to="/V-blogs">Login</Link></p>
          </form>
        </div>
        <Loading loader={Loader} />
        <SuccessModal modal={modal} message={successMessage} />
        <ErrorModal errModal={errModal} message={errorMessage} />
    </div>
  )
}

export default Register
