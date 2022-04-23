import React from 'react'
import './navigation.css'
import {BsPen} from 'react-icons/bs'
import {Link} from 'react-router-dom'

const Navigation = () => {
  return (
    <header>
        <div className="container">
            <div className="nav-bar">
                <div className="logo">
                    <h4>V-Blogs<BsPen className='icon' /></h4>
                </div>
                <nav>
                    <ul><Link to="/"><li className='btn btn-outline'> Home</li></Link></ul>
                    <ul><Link to="/create-blog"><li className='btn btn-outline'>CreateBlog</li></Link></ul>
                    <ul><Link to="/login"><li className='btn btn-outline'>Login/Register</li></Link></ul>
                    <ul><Link to="/profile"><li className='btn btn-outline'>Your Profile</li></Link></ul>
                </nav>
            </div>
        </div>
    </header>
  )
}

export default Navigation