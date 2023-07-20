import React, { useEffect } from 'react'
import "./NewsBox.css"

const NewsBox = ({title , desc , img , source , time , id}) => {
  let datePut = ""
  let timePut = ""

  for(let i=0;i<time.length;i++){
    if(time.charAt(i)=="T"){
      break;
    }
    datePut+= time.charAt(i)
  }

  for(let i=time.length-5;i>=0;i--){
    if(time.charAt(i)=="T"){
      break;
    }
    timePut = time.charAt(i) + timePut
  }

  console.log(timePut)

  return (
    <div className="news-outer">
      <div style={{backgroundImage: `url("${img}")`}} className="img-box"></div>
      <div className="source-box">{source + " " + datePut + " " + timePut}</div>
      <div className="title-box">{title}</div>
      <div className="desc-box">{desc}</div>
    </div>
   
  )
}

export default NewsBox