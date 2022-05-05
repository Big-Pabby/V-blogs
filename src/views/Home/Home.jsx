import React from 'react'
import './home.css';
import Showcase from '../../Components/Showcase/Showcase';
import ArrowTop from '../../Components/ArrowTop/ArrowTop';
import BlogPost from '../../Components/BlogPost/BlogPost';
import GetStarted from '../../Components/GetStarted/GetStarted';

const Home = () => {
  return (
    <div className="Home container">
      <Showcase />
      <ArrowTop />
      <BlogPost />
      <GetStarted />
    </div>
  )
}

export default Home