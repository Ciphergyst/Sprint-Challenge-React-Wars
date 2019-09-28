import React, { useState, useEffect } from 'react';
import './App.css';
import Starwarslist from"./components/Starwarslist.js"
import Pagination from "./components/Pagination"
import axios from "axios"

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
    setStarwars(res.data.results.map(s => s.name))
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
  
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  return (
    <div className="App">
      <h1 className="Header">React Wars</h1>
      <>
        <Starwarslist starwars={starwars} />
        <Pagination 
          gotoNextPage={nextPageUrl ? gotoNextPage : null}
          gotoPrevPage={prevPageUrl ? gotoPrevPage : null}
        />
      </>
    </div>
   
   
  );
}

export default App;
