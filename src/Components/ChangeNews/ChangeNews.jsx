import React from 'react'
import "./ChangeNews.css"
import category from '../../Category'

const ChangeNews = ({setCategory , topHead , setDataAPI}) => {

    function buttonChange(e){
        setCategory(e.target.value)
        topHead(true)
        setDataAPI(null)
        document.querySelector(".selected").classList.remove("selected");
        document.getElementById(e.target.id).classList.add("selected");
    }

  return (
    <div className="change-news">
        <div className="mid-change">
            {
                category.map((value,index)=>{
                    if(value === "General"){
                        return(
                            <button id={index} value={value} onClick={buttonChange} className='mid-change-buttons selected'>{value}</button>
                        ) 
                    }
                    return(
                        <button id={index} value={value} onClick={buttonChange} className='mid-change-buttons'>{value}</button>
                    )
                })
            }
        </div>
    </div>
  )
}

export default ChangeNews