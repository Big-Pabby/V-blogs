import React from 'react'
import './home.css';
import Showcase from '../../Components/Showcase/Showcase';
import ArrowTop from '../../Components/ArrowTop/ArrowTop';
import BlogPost from '../../Components/BlogPost/BlogPost';

const Home = () => {
  return (
    <div className="Home">
      <Showcase />
      <ArrowTop />
      <BlogPost />
    </div>
  )
}

export default Home