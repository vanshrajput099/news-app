import React, { useEffect } from 'react'
import "./NewsBox.css"

const NewsBox = ({title , desc , img , source}) => { 
  return (
    <div className="news-outer">
      <div style={{backgroundImage: `url("${img}")`}} className="img-box"></div>
      <div className="source-box">{source}</div>
      <div className="title-box">{title}</div>
      <div className="desc-box">{desc}</div>
    </div>
   
  )
}

export default NewsBox