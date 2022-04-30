import React from 'react'
import './loading.css'

const Loading = ({ loader }) => {
  if(loader === true ) {
    return (
      <div className="loader-container">
        <div className="loader">
            <div className="circle"></div>
            <div className="circle"></div>
        </div>
      </div>
    )
  }
}

export default Loading