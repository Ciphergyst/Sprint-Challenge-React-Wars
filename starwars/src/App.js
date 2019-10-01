import React, { useState, useEffect } from 'react';
import axios from "axios";
import './App.css';
import Starwars from "./components/starwars";
// import CardCreator from "./components/CardCreator"
import Pagination from "./components/Pagination.js"
// import Starwarslist from"./components/Starwarslist.js"


const App = () => {
  const [starwars, setStarwars] = useState([])
  const [currentPageUrl, setCurrentPageUrl]= useState("https://swapi.co/api/people/")
  const [nextPageUrl, setNextPageUrl] = useState()
  const [prevPageUrl, setPrevPageUrl] = useState()
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setLoading(true)
    let cancel
    axios.get(currentPageUrl, {
      cancelToken: new axios.CancelToken(c => cancel = c)
    }).then(res => {
      setLoading(false)
      setNextPageUrl(res.data.next)
      setPrevPageUrl(res.data.previous)
      setStarwars(res.data.results)
   })

   return () => cancel() 
  }, [currentPageUrl])

  function gotoNextPage() {
    setCurrentPageUrl(nextPageUrl)
  }

  function gotoPrevPage() {
    setCurrentPageUrl(prevPageUrl)
  }

  if (loading) return "Loading..."

  return (
    <div className="Container">
      <h1 className="Header">React Wars</h1>
      
      <>
       
         {starwars.map(s => {
           return <Starwars s={s} key={s.name} />
         })}
       
        
        <Pagination 
           gotoNextPage={nextPageUrl ? gotoNextPage : null}
           gotoPrevPage={prevPageUrl ? gotoPrevPage : null}
        />
      </>

    </div>
  );
}

export default App;
