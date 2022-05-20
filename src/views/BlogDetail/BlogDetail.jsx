import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import './blogDetail.css'

const BlogDetail = () => {
  const params = useParams();

  const [item, setItem] = useState({});

  useEffect(() => {
    fetch(`https://secure-taiga-11377.herokuapp.com/blogPost/${params.id}`)
      .then(Response => Response.json())
      .then(post => {setItem(post)})
  }, [params.id]);

  return (
    <div className="blog-detail">
        <div className="container">
            <div className="blog-Image">
            <img src={require(`../../assets${item.blogimageurl}`)} alt="blogimage" />
            </div>
            <div className="content">
              <h2>{item.blogtitle}</h2>
              <p>{item.blogby} | {item.created}</p>
              <div className='category'>{item.blogcategory}</div>
              <p className='topic' dangerouslySetInnerHTML={{__html: item.blogcontent}}></p>
            </div>
        </div>
    </div>
  )
}

export default BlogDetail