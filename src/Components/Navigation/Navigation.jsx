import React from 'react'
import './navigation.css'

const Navigation = () => {
  return (
    <header>
        <div className="container">
            <div className="nav-bar">
                <div className="logo">
                    <h4>V-Blogs</h4>
                </div>
                <nav>
                    <ul><li><a href="#" className='btn btn-outline'>Home</a></li></ul>
                    <ul><li><a href="#" className='btn btn-outline'>CreateBlog</a></li></ul>
                    <ul><li><a href="#" className='btn btn-outline'>Login/Register</a></li></ul>
                    <ul><li><a href="#" className='btn btn-outline'>Your Profile</a></li></ul>
                </nav>
            </div>
        </div>
    </header>
  )
}

export default Navigation