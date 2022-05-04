import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import './blogDetail.css'
import  Field from '../../assets/images/field.jpg'

const BlogDetail = () => {
  const params = useParams();

  const [item, setItem] = useState({});

  useEffect(() => {
    fetchItem()
  }, []);

  const fetchItem = async () => {
    const fetchItem = await fetch(`http://localhost:5000/blogPost/${params.id}`);
    const post = await fetchItem.json()
    setItem(post);
  }

  return (
    <div className="blog-detail">
        <div className="container">
            <div className="blog-Image">
              <img src={item.blogimageurl} alt="blogimage" />
            </div>
            <div className="content">
              <h2>{item.blogtitle}</h2>
              <div className='category'>{item.blogcategory}</div>
              <p dangerouslySetInnerHTML={{__html: item.blogcontent}}></p>
            </div>
        </div>
    </div>
  )
}

export default BlogDetail