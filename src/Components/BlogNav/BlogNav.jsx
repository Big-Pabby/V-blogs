import React from 'react'
import './blogNav.css'

const BlogNav = ({Entertainment, News, allPost, business, technology, sports, education, hideBlog}) => {


  return (
    <nav className='BlogNav'>
        <li><a href="#home" onClick={allPost}>All Blogs</a></li>
        <li><a href="#showcase" onClick={technology}>Tech</a></li>
        <li><a href="#showcase" onClick={business}>Business</a></li>
        <li><a href="#showcase" onClick={News}>News</a></li>
        <li><a href="#showcase" onClick={education}>Education</a></li>
        <li><a href="#showcase" onClick={sports}>Sports</a></li>
        <li><a href="#showcase" onClick={Entertainment}>Entertainment</a></li>
        <li><a href="#showcase" onClick={hideBlog}>Hide Blogs</a></li>
    </nav>
  )
}

export default BlogNav