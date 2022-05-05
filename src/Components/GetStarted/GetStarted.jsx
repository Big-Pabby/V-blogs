import React from 'react'
import './getStarted.css'
import Topic from '../../assets/images/topic.jpeg'
import Category from '../../assets/images/category.jpg'
import Setimage from '../../assets/images/setImage.jpg'
import content from '../../assets/images/content.jpg'
import publish from '../../assets/images/publish.jpg'

const GetStarted = () => {
  return (
    <section id='tips' className="tips">
        <div>
            <div className="tips-heading-text">
                <h1>How V-Blogs Works </h1>
                <p>Let's walk you through the entire process</p>
            </div>
            <div className="tips-content">
                <div className="tip">
                    <div className="tip-image">
                        <img src={Topic} alt="tip" />
                    </div>
                    <div className="tip-content">
                        <h2>Get A Topic</h2>
                        <p>Your topic should be an idea of what your blog is about (It cannot be less than 10 words).</p>
                    </div>
                </div>
                <div className="tip tip-reverse">
                    <div className="tip-image">
                        <img src={Category} alt="tip" />
                    </div>
                    <div className="tip-content">
                        <h2>Pick A Category</h2>
                        <p>There are lots of different categories like Sports, News, Entertainment.... Selecting a category helps viewers to know what your blog is about.</p>
                    </div>
                </div>
                <div className="tip">
                    <div className="tip-image">
                        <img src={Setimage} alt="tip" />
                    </div>
                    <div className="tip-content">
                        <h2>Set Image</h2>
                        <p><strong>The looks of the blog</strong>, helps viewer to have an image or a feel of the blog. Your image can be about anything but give it an image relating to the blog.</p>
                    </div>
                </div>
                <div className="tip tip-reverse">
                    <div className="tip-image">
                        <img src={content} alt="tip" />
                    </div>
                    <div className="tip-content">
                        <h2>Start Blogging</h2>
                        <p>Your blog should not be too short, you can add links to your socials in the blog editor if you want to engage with your viewers.</p>
                    </div>
                </div>
                <div className="tip">
                    <div className="tip-image">
                        <img src={publish} alt="tip" />
                    </div>
                    <div className="tip-content">
                        <h2>Publish Blog!</h2>
                        <p>And you are set for your blog to reach out the world.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default GetStarted