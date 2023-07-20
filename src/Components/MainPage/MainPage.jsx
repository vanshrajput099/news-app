import React, { useEffect, useState } from 'react'
import "./MainPage.css"
import NewsBox from '../News-Box/NewsBox'
import axios from 'axios'
import loading from "../../Assets/searchLoad.png"
import errorImg from "../../Assets/error.png"

const API = "e6a85c0d90c3474eb121ef711e5ec5e0"
const URL = "https://newsapi.org/v2/top-headlines?"
const URLSearch = "https://newsapi.org/v2/everything?q="

const MainPage = ({category , search , topHead , setDataAPI , dataAPI}) => {

  
  const [error , setError] = useState(null)

  useEffect(()=>{

    console.log("USE")

    async function fetchDataSearch(){
      try{
        let response = await axios.get(URLSearch + search + "&language=en&pageSize=100" + "&apikey=" + API)
        setDataAPI(response.data.articles)
        console.log(response.data.articles)
      }

      catch(err){
        setError(error)
      }
    }

    async function fetchData(){
      try{
        let response = await axios.get(URL + "category=" + category + "&lang=en&country=in" + "&pageSize=50" + "&apikey=" + API)
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
                  img = {value.urlToImage}
                  source = {value.source.name}
                  time = {value.publishedAt}
                />
              )
            })
          }
        </div >
  )
}

export default MainPage