import React, {useState, useEffect} from 'react'
import './blogPost.css'
import BlogNav from '../BlogNav/BlogNav'
import BlogPostImg from '../../assets/images/blogPost.svg'
import Field from '../../assets/images/field.jpg'
import Anime from '../../assets/images/anime.jpg'
import Forest from '../../assets/images/forest.jpg'
import {AiOutlineArrowRight} from 'react-icons/ai';

const BlogPost = () => {
  useEffect(() => {
    fetchBlogPosts();
  }, []);

  const [blogData, setBlogData] = useState([]);

  const fetchBlogPosts = async () => {
    const data = await fetch('http://localhost:5000/blogPost')
    const posts = await data.json()
    setBlogData(posts)
  }

  return (
    <section className="container blogs">
        <h1>BLOGS</h1>
        <hr />
        <BlogNav />
        <div className="blogs-svg">
          <img src={BlogPostImg} alt="blogsvg" />
        </div>
        {
          blogData.map((blogPost, index) => {
            return (
              <div key={index} className="blog">
                <div className="blog-image">
                  <img src={blogPost.blogImageURL} />
                </div>
                <div className="blog-content">
                  <h2>{blogPost.blogTitle}</h2>
                  <div className="category">{blogPost.blogCategory}</div>
                  <h4>Victor Adekunle | {blogPost.created}</h4>
                  <span>
                    <p dangerouslySetInnerHTML={{__html: blogPost.blogContent.substring(0, 50)}}></p>
                    <p>...</p>
                  </span>
                  <a href="#" className='btn'>View Post <AiOutlineArrowRight/></a>
                </div>
              </div>
            )
          })
        }
    </section>
  )
}

export default BlogPost