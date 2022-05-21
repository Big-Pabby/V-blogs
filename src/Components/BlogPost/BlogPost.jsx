import React, {useState, useEffect} from 'react'
import './blogPost.css'
import BlogNav from '../BlogNav/BlogNav'
import BlogPostImg from '../../assets/images/blogPost.svg'
import { Link } from 'react-router-dom'
import {AiOutlineArrowRight} from 'react-icons/ai';

const BlogPost = () => {
  useEffect(() => {
    fetchBlogPosts();
  }, []);

  /* State of the app */
  const [blogData, setBlogData] = useState([]);
  const [category, setCategory] = useState('')

  /* Fetch Posts from Server */
  const fetchBlogPosts = async () => {
    const data = await fetch('https://secure-taiga-11377.herokuapp.com/blogPost')
    const posts = await data.json()
    setBlogData(posts)
  }


  /* Functionality for filtering posts */
  const Entertainment = () => {
    setCategory('Entertainment')
  }
  const News = () => {
    setCategory('News')
  }
  const allPost = () => {
    setCategory('')
  }
  const business = () => {
    setCategory('Business')
  }
  const technology = () => {
    setCategory('Technology')
  }
  const sports = () => {
    setCategory('Sports')
  }
  const education = () => {
    setCategory('Education')
  }
  const hideBlog = () => {
    setCategory('hideBlog')
  }

  /* Filter Post data */
  const filterBlogData = blogData.filter(post => {
    if(category === '') {
      return post
    } else {
      return post.blogcategory === category
    }
  })

  return (
    <section className="blogs">
        <h1>BLOGS</h1>
        <hr />
        <BlogNav Entertainment={Entertainment} News={News} allPost={allPost} business={business} technology={technology} sports={sports} education={education} hideBlog={hideBlog} />
        <div className="blogs-svg">
          <img src={BlogPostImg} alt="blogsvg" />
        </div>
        {
          filterBlogData.map((blogPost) => {
            return (
              <div key={blogPost.blogid} className="blog">
                <div className="blog-image">
                <img src={blogPost.blogimageurl} alt="blogimage" />
                </div>
                <div className="blog-content">
                  <h2>{blogPost.blogtitle}</h2>
                  <div className="category">{blogPost.blogcategory}</div>
                  <h4>{blogPost.blogby} | {blogPost.created}</h4>
                  <p className='elipsis' dangerouslySetInnerHTML={{__html: blogPost.blogcontent}}></p>
                  <Link to={`/blog-detail/${blogPost.blogid}`} className='btn'>View Post <AiOutlineArrowRight/></Link>
                </div>
              </div>
            )
          })
        }
    </section>
  )
}

export default BlogPost