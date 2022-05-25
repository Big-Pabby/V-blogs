import React from 'react'
import './navigation.css'
import { Link } from 'react-router-dom'
import HamburgerMenu from '../HamburgerMenu/HamburgerMenu'
import Logo from '../Logo/Logo'

const Navigation = ({logOut}) => {
  return (
    <header>
        <div className="container">
            <div className="nav-bar">
                <Logo />
                <nav>
                    <ul><Link to='/home'><li className='btn btn-outline'> Home</li></Link></ul>
                    <ul><Link to='/create-blog'><li className='btn btn-outline'>Create Blog</li></Link></ul>
                    <ul><Link to='/profile'><li className='btn btn-outline'>Your Profile</li></Link></ul>
                </nav>
                <ul className='logout' onClick={logOut}><Link to='/V-blogs'><li className='btn'>Logout</li></Link></ul>
                <HamburgerMenu logOut={logOut} className='HamburgerMenu' />
            </div>
        </div>
    </header>
  )
}

export default Navigation