import React from 'react'
import "./Header.css"

const Header = ({search , topHead , setDataAPI}) => {
  let searchVal = ""

  function sendSearch(e){
    e.preventDefault()
    topHead(false)
    setDataAPI(null)
    search(searchVal)
  }

  return (
    <div className="main-page-header">
        <h1 className="main-page-header-h1">Fast News</h1> 
        <div className="search-news">
          <input onChange={(e)=>{searchVal=e.target.value}} placeholder='Enter Your Search' className="news-input" type="text" />
          <button onClick={sendSearch} className='news-button'>Search</button>
        </div>
    </div>
  )
}

export default Header