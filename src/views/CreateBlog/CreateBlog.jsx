import React, { useState } from 'react'
import './createBlog.css'
import ReactQuill from 'react-quill'
import '../../../node_modules/react-quill/dist/quill.snow.css'

const CreateBlog = () => {

  const [blogPost, setBlogPost] = useState({
    blogTitle: '',
    blogContent: '',
    blogImage: null,
    blogImageURL: null,
    blogCategory: '',
    created: new Date()
  })

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

  const publishBlog = () => {
    console.log(blogPost)
  }

  return (
    <div className='createblog container'>
      <div className="createblog-input">
        <div className="createblog-title">
          <input onChange={saveBlogTitle} type="text" placeholder='Enter Blog Title' />
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
          <input onChange={saveImage} type="file" id="blog-photo" accept='.png, .jpg, .jpeg' />
          <span>File Name:{blogPost.blogImage}</span>
        </div>
      </div>
      <div className="createblog-input-image">
        <img src={blogPost.blogImageURL} alt="" />
      </div>
      <ReactQuill value={blogPost.blogContent} onChange={saveBlogContent} placeholder='Write your blog here...' modules={CreateBlog.modules} formats={CreateBlog.formats} />
      <div className="createblog-btn">
        <button type='button' onClick={publishBlog} className="btn">PUBLISH BLOG</button>
      </div>
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

export default CreateBlog