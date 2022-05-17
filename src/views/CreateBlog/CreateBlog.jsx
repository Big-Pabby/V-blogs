import React, { useState, useEffect } from 'react'
import './createBlog.css'
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css';
import Loader from '../../Components/Loading/Loading'
import { useNavigate } from 'react-router-dom';

const CreateBlog = ({user}) => {
  const [errorMessage, setErrorMessage] = useState('');
  const [loader, setLoader] = useState(false)
  const [blogPost, setBlogPost] = useState({
    blogTitle: '',
    blogBy: `${user.firstname} ${user.lastname}`,
    blogContent: '',
    blogImage: null,
    blogImageURL: null,
    blogCategory: 'News',
  });

  const history = useNavigate();

  const saveBlogTitle = (e) => {
    setBlogPost({...blogPost, blogTitle: e.target.value})
  }
  const saveBlogContent = (value) => {
    setBlogPost({...blogPost, blogContent: value})
  }
  const saveCategory = (e) => {
    setBlogPost({...blogPost, blogCategory: e.target.value})
  }

  const saveImage = (e) => {
    setBlogPost({...blogPost, blogImage: e.target.files[0].name, blogImageURL: URL.createObjectURL(e.target.files[0])})
  }

  const publishBlog = async () => {
    if(blogPost.blogContent.length >= 300 && blogPost.blogTitle.length >= 10 && blogPost.blogImage !== null) {
      setLoader(true)
      const res = await fetch('https://secure-taiga-11377.herokuapp.com/publishPost', {
          method: 'post',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify({
              blogTitle: blogPost.blogTitle,
              blogCategory: blogPost.blogCategory,
              blogImageURL: blogPost.blogImageURL,
              blogContent: blogPost.blogContent,
              blogImageName: blogPost.blogImage,
              blogBy: blogPost.blogBy
          })
      })
      setTimeout(() => {
        setLoader(false);
      }, 5000)
      console.log(res.json())
      setErrorMessage('Blog Published Successfully')
      history('/')
    } else {
      setErrorMessage('Oops!!!, looks like there is an error. Make sure the blog content is greater than 300 words or the blog title is greater than 10 words or make sure you have uploaded an image. Then you are all set')
    }
  }


  return (
    <div className='createblog'>
      <div className="container">
        <div className="createblog-input">
          <div className="createblog-title">
            <input onChange={saveBlogTitle} type="text" placeholder='Enter Blog Title' required />
          </div>
          <select className='select-field' onChange={saveCategory} >
            <option value="News">News</option>
            <option value="Business">Business</option>
            <option value="Technology">Technology</option>
            <option value="Education">Education</option>
            <option value="Sports">Sports</option>
            <option value="Entertainment">Entertainment</option>
          </select>
          <div className="createblog-image">
            <label htmlFor="blog-photo">Upload Cover Photo</label>
            <input onChange={saveImage} type="file" id="blog-photo" accept='.png, .jpg, .jpeg' required />
            <span>File Name:{blogPost.blogImage}</span>
          </div>
        </div>
        <div className="createblog-input-image">
          <img src={blogPost.blogImageURL} alt="" />
        </div>
        <ReactQuill onChange={saveBlogContent} placeholder='Write your blog here...' modules={CreateBlog.modules} formats={CreateBlog.formats} />
        <p className='error-msg'>{errorMessage}</p>
        <div className="createblog-btn">
          <button type='button' onClick={publishBlog} className="btn">PUBLISH BLOG</button>
        </div>
      </div>
      <Loader loader={loader} />
    </div>
  )
}

CreateBlog.modules = {
  toolbar: [
    [{size : []}],
    ["bold", "italic", "underline", "strike", "blockquote"],
    [{list: "ordered"}, {list: "bullet"}],
    ["link"],
    ["code-block"]
  ]
}

CreateBlog.formats = [
  "size",
  "link",
  "list",
  "bullet",
  "bold",
  "italic",
  "underline",
  "strike",
  "blockquote",
  "code-block"
]

export default CreateBlog;