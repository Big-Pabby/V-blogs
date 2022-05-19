import React from 'react'
import './footer.css';
import Logo from '../Logo/Logo';

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="footer-flex">
          <Logo className="footer-logo" />
          <p>App Developed By <a href="#showcase">Victor Adekunle</a> &copy; 2022</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer