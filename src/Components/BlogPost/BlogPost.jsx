import React from 'react'
import './blogPost.css'
import BlogNav from '../BlogNav/BlogNav'
import BlogPostImg from '../../assets/images/blogPost.svg'
import Field from '../../assets/images/field.jpg'
import Anime from '../../assets/images/anime.jpg'
import Forest from '../../assets/images/forest.jpg'
import {AiOutlineArrowRight} from 'react-icons/ai';

const BlogPost = () => {
  return (
    <section className="container blogs">
        <h1>BLOGS</h1>
        <hr />
        <BlogNav />
        <div className="blogs-svg">
          <img src={BlogPostImg} alt="blogsvg" />
        </div>
        <div className="blog">
          <div className="blog-image">
            <img src={Field} alt="pitch" />
          </div>
          <div className="blog-content">
            <h2>FIFA World Cup</h2>
            <h4>Victor Adekunle | April 23, 2022</h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est harum blanditiis numquam ab magni nisi!</p>
            <a href="#" className='btn'>View Post <AiOutlineArrowRight/></a>
          </div>
        </div>

        <div className="blog">
          <div className="blog-image">
            <img src={Anime} alt="anime" />
          </div>
          <div className="blog-content">
            <h2>Naruto vs Luffy vs Goku</h2>
            <h4>Victor Adekunle | April 23, 2022</h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est harum blanditiis numquam ab magni nisi!</p>
            <a href="#" className='btn'>View Post <AiOutlineArrowRight/></a>
          </div>
        </div>

        <div className="blog">
          <div className="blog-image">
            <img src={Forest} alt="forest" />
          </div>
          <div className="blog-content">
            <h2>Clean Your Environment</h2>
            <h4>Victor Adekunle | April 23, 2022</h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est harum blanditiis numquam ab magni nisi!</p>
            <a href="#" className='btn'>View Post <AiOutlineArrowRight/></a>
          </div>
        </div>
    </section>
  )
}

export default BlogPost