import React from 'react'
import './blogNav.css'

const BlogNav = ({blogData}) => {

  return (
    <nav className='BlogNav'>
        <li><a href="#">Latest</a></li>
        <li><a href="#">Tech</a></li>
        <li><a href="#">Business</a></li>
        <li><a href="#">News</a></li>
        <li><a href="#">Education</a></li>
        <li><a href="#">Sports</a></li>
        <li><a href="#">Entertainment</a></li>
    </nav>
  )
}

export default BlogNav