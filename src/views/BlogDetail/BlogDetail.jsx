import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import './blogDetail.css'
import  Field from '../../assets/images/field.jpg'

const BlogDetail = () => {
  const params = useParams();

  const [item, setItem] = useState({});

  useEffect(() => {
    const fetchItem = async () => {
      const fetchItem = await fetch(`http://localhost:5000/blogPost/${params.id}`);
      const post = await fetchItem.json()
      setItem(post);
    }
    fetchItem()
  });

  return (
    <div className="blog-detail">
        <div className="container">
            <div className="blog-Image">
              <img src={Field} alt="blogimage" />
            </div>
            <div className="content">
              <h2>{item.blogTitle}</h2>
              <div className='category'>{item.blogCategory}</div>
              <p>{item.blogContent}</p>
            </div>
        </div>
    </div>
  )
}

export default BlogDetail