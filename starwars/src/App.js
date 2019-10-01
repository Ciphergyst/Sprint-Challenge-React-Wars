import React, { useState, useEffect } from 'react';
import './App.css';
import Starwarslist from"./components/Starwarslist.js"
import Pagination from "./components/Pagination"
import Cards from "./components/Cards/cards";


import { Container, Row } from "reactstrap";
import { Card, CardText, CardBody, CardTitle, CardImg, Col } from "reactstrap";
import styled from 'styled-components';
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
    <Container>
      <Row>
    
        {starwars.map(starwars => {
         return (
           <Cards
             Title={starwars.name}
             species={starwars.species}
             homeworld={starwars.homeworld}
             key={starwars.id}
           />
         );
       })}
       <h1 className="Header">React Wars</h1>
       <>
         <Starwarslist starwars={starwars} />
         <Card />
         <CardText species={starwars.species} />
         <CardBody homeworld={starwars.homeworld} />
         <CardTitle Title={starwars.name} />
         <CardImg />
         <Col />
         
         <Pagination 
          gotoNextPage={nextPageUrl ? gotoNextPage : null}
          gotoPrevPage={prevPageUrl ? gotoPrevPage : null}
        />
       </>
     </Row>
    </Container>
   
  );
}

export default App;
