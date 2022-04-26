import React, { useState } from 'react'
import './createBlog.css'
import ReactQuill from 'react-quill'
import '../../../node_modules/react-quill/dist/quill.snow.css'

const CreateBlog = () => {

  const [blogText, setBlogText] = useState('')

  return (
    <div className='createblog container'>
      <div className="createblog-input">
        <div className="createblog-title">
          <input type="text" placeholder='Enter Blog Title' />
        </div>
        <div className="createblog-image">
          <label htmlFor="blog-photo">Upload Cover Photo</label>
          <input type="file" id="blog-photo" accept='.png, .jpg, .jpeg' />
          <span>File Name:</span>
        </div>
      </div>
      <ReactQuill placeholder='Write your blog here...' modules={CreateBlog.modules} formats={CreateBlog.formats} />
      <div className="createblog-btn">
        <button className="btn">PUBLISH BLOG</button>
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

]

export default CreateBlog