import React, { useState } from 'react'
import './createBlog.css'
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css';
import Loader from '../../Components/Loading/Loading'
import { useNavigate } from 'react-router-dom';
import SuccessModal from '../../Components/ModalMessage/SuccessModal';
import ErrorModal from '../../Components/ModalMessage/ErrorModal';

const CreateBlog = ({user}) => {
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [loader, setLoader] = useState(false);
  const [modal, setModal] = useState(false);
  const [errModal, setErrModal] = useState(false);
  const [blogPost, setBlogPost] = useState({
    blogTitle: '',
    blogBy: `${user.firstname} ${user.lastname}`,
    blogContent: '',
    blogImage: '',
    blogImageURL: '',
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

  const saveImage =  async (e) => {
    setBlogPost({...blogPost, blogImage: e.target.files[0].name, blogImageURL: URL.createObjectURL(e.target.files[0])})

    // const formData = new FormData();
    // formData.append('file', e.target.files[0]);

    // try {
    //   setLoader(true)
    //   const res = await axios.post('https://secure-taiga-11377.herokuapp.com/upload', formData, {
    //     headers: {
    //       'Content-Type': 'multipart/form-data'
    //     }
    //   });

    //   const {fileName, filePath } = res.data;

    //   // setUploadFile({fileName, filePath})
    //   setTimeout(() => {
    //     setLoader(false)
    //     setBlogPost({...blogPost, blogImage: fileName, blogImageURL: filePath})
    //   }, 3000)
    // } catch(err) {
    //   if(err.response.status === 500) {
    //     console.log('There was a problem with the server')
    //   } else {
    //     console.log(err.response.data.msg)
    //   }
    // }
  }

  const publishBlog = async () => {
    if(blogPost.blogContent.length >= 300 && blogPost.blogTitle.length >= 10 && blogPost.blogImage !== null) {
      setLoader(true)
      try {
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
        console.log(res.json())
        const response = await res.json()
        setLoader(false);
        if(response !== 'unable to publish post') {
          setSuccessMessage('Blog Published Sucessfully');
          setModal(true);
          setTimeout(() => {
            setModal(false);
            setSuccessMessage('');
            history('/home');
          }, 3000)
        } else {
          setErrModal(true);
          setErrorMessage('Unable to publish blog');
          setTimeout(() => {
            setErrModal(false);
            setErrorMessage('')
          }, 3000)
        }
      } catch {
        setErrModal(true);
        setErrorMessage('No internet connection');
        setTimeout(() => {
          setErrModal(false);
          setErrorMessage('')
        }, 3000)
      }
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
            <input onChange={saveImage} type="file" name='blog-picture' id="blog-photo" accept='.png, .jpg, .jpeg' />
            <span>File Name:{blogPost.blogImage}</span>
          </div>
        </div>
        { blogPost.blogImageURL ? (
          <div className="createblog-input-image">
            <img src={blogPost.blogImageURL} alt="" />
          </div>
        ) : null }
        <ReactQuill onChange={saveBlogContent} placeholder='Write your blog here...' modules={CreateBlog.modules} formats={CreateBlog.formats} />
        <p className='error-msg'>{errorMessage}</p>
        <div className="createblog-btn">
          <button type='button' onClick={publishBlog} className="btn">PUBLISH BLOG</button>
        </div>
      </div>
      <Loader loader={loader} />
      <SuccessModal modal={modal} message={successMessage} />
      <ErrorModal errModal={errModal} message={errorMessage} />
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