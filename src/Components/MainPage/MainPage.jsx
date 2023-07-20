import React, { useEffect, useState } from 'react'
import "./MainPage.css"
import NewsBox from '../News-Box/NewsBox'
import axios from 'axios'
import loading from "../../Assets/searchLoad.png"
import errorImg from "../../Assets/error.png"

const API = "15031eada2f2f57adc541cea98bd9c98"
const URL = "https://gnews.io/api/v4/top-headlines?"
const URLSearch = "https://gnews.io/api/v4/search?q="

const MainPage = ({category , search , topHead , setDataAPI , dataAPI}) => {

  
  const [error , setError] = useState(null)

  useEffect(()=>{

    console.log(category)

    async function fetchDataSearch(){
      try{
        let response = await axios.get(URLSearch + search + "&lang=en&max=100" + "&apikey=" + API)
        setDataAPI(response.data.articles)
        console.log(response.data.articles)
      }

      catch(err){
        setError(error)
      }
    }

    async function fetchData(){
      try{
        console.log(URL + "category=" + category + "&lang=en&country=in" + "&max=50" + "&apikey=" + API)
        let response = await axios.get(URL + "category=" + category + "&lang=en&country=in" + "&max=50" + "&apikey=" + API)
        setDataAPI(response.data.articles)
        console.log(response.data.articles)
      }

      catch(err){
        setError(error)
      } 
    }

    if(!topHead){
      fetchDataSearch()
    }

    else{
      fetchData()
    }
    
  },[category , search])

  if(dataAPI === null){
    return(
      <div className='loading'>
        <h1 className='loading-h1'> Loading..... </h1>
        <img className='loading-img' src={loading} alt="" />
      </div>
    )
  }

  if(dataAPI.length === 0){
    return(
      <div className="error">
        <img className='error-img' src={errorImg} alt="" />
        <h1 className='error-h1'> Oopsie... <br /> No Result Found !! </h1>
      </div>
    )
  }

  return (
        <div className="main-page-news-section">
          {
            dataAPI.map((value,index)=>{
              if(value.title === null || value.description === null || value.urlToImage ===null){
                return null
              }
              
              return(
                <NewsBox
                  key = {index}
                  id = {index}
                  title = {value.title}
                  desc = {value.description}
                  img = {value.image}
                  source = {value.source.name}
                />
              )
            })
          }
        </div >
  )
}

export default MainPage