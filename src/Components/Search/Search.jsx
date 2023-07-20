import React from 'react'
import "./Search.css"

const Search = ({topHead , search}) => {
  let text = "Top Headlines"
  if(!topHead){
    text = "Results For "
  }
  return (
    <div className="search-box">
      <h1 className='search-h1'>{text} {!topHead ? <span className='search-span'>{search}</span> : null}</h1>
      <hr className='search-hr' />
    </div>
  )
}

export default Search;