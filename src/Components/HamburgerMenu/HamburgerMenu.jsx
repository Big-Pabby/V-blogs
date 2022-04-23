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
                        <li className='nav-text'><Link to='/'>Home</Link></li>
                        <li className='nav-text'><Link to='/create-blog'>CreateBlog</Link></li>
                        <li className='nav-text'><Link to='/login'>Login/Register</Link></li>
                        <li className='nav-text'><Link to='/profile'>Profile</Link></li>
                    </div>  
                </ul>
            </div>
        </div>
    )
}

export default HamburgerMenu