import React, { useState } from 'react'
import "./App.css"
import MainPage from './Components/MainPage/MainPage'
import Header from './Components/Header/Header'
import ChangeNews from './Components/ChangeNews/ChangeNews'
import Search from './Components/Search/Search'

const App = () => {

  const [category , setCategory] = useState("general")
  const [search , setSearch] = useState(null)
  const [topHead , settopHead] = useState(true)
  const [dataAPI, setDataAPI] = useState(null);
  
  return (
    <div className="app-component">

          <Header 
            search = {setSearch}
            topHead = {settopHead}
            setDataAPI = {setDataAPI}
          />

          <ChangeNews 
            setCategory = {setCategory}
            topHead = {settopHead}
            setDataAPI = {setDataAPI}
          />

          <Search 
            topHead = {topHead} 
            search = {search} 
          />

          <MainPage 
            category = {category}
            search = {search}
            topHead = {topHead} 
            setDataAPI = {setDataAPI}
            dataAPI = {dataAPI}
          />

    </div>
  )
}

export default App