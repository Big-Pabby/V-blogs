import React from 'react'
import './showcase.css'
import StartBlogging from '../../assets/images/startBlogging.svg'
import {AiOutlineArrowRight} from 'react-icons/ai'

const Showcase = () => {
  return (
    <section id='showcase' className='showcase container'>
        <div className="showcase-content-container">
            <div className="showcase-content">
                <h1>Explore new perspectives</h1>
                <p>Read and share ideas from independent voices, world-class publications, and experts from around the globe. Everyone's welcome</p>
                <a href="#" className='btn'>Get Started <AiOutlineArrowRight/></a>
            </div>
        </div>

        <div className="showcase-image">
            <img src={StartBlogging} alt="Start blogging" />
        </div>
    </section>
  )
}

export default Showcase