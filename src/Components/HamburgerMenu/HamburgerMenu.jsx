import React, {useState} from 'react'
import  {FaBars} from 'react-icons/fa'
import {GrClose} from 'react-icons/gr'
import { Link } from 'react-router-dom'
import './hamburgerMenu.css'

function HamburgerMenu() {
    const [sidebar, setSidebar] = useState(false)

    const showSidebar = () => setSidebar(!sidebar)
    return (
        <div>
            <div className="hamburger">
                <Link to="#" className='menu-bars'>
                    <FaBars onClick={showSidebar}/>
                </Link>
            </div>
            <div className={sidebar ? 'hamburger-menu active' : 'hamburger-menu'}>
                <ul className="nav-menu-items" onClick={showSidebar}>
                    <li className="navbar-toggle">
                        <Link to='#' className='menu-bars'>
                            <GrClose className='cross' />
                        </Link>
                    </li>
                    <div className="nav-links">
                    <Link to='/' className='nav-text'><li >Home</li></Link>
                        <Link to='/create-blog' className='nav-text'><li>CreateBlog</li></Link>
                       <Link to='/login' className='nav-text'><li>Login/Register</li></Link>
                        <Link to='/profile' className='nav-text'><li>Profile</li></Link>
                    </div>  
                </ul>
            </div>
        </div>
    )
}

export default HamburgerMenu