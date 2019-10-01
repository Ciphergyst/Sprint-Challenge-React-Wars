import React from 'react';





// const CharacterName = styled.h1`
//     text-align: center;
//     background-color: black;
//     color: white;
// `

// const Container = styled.div`
//     background-color: white;
// `

// const Attr = styled.p`
//     padding-bottom: 1rem;
//     text-align: center;
//     font-size: 1.3rem
// `

import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
  } from 'reactstrap';
import Starwarslist from './Starwarslist';
  
  const starwars = (props) => {
      
    return (
      <>
        
         <Card>     
          <CardImg top width="50%" src="assets/LukeS.jpeg" alt="Luke Skywalker" />
           <CardBody>
             <CardTitle>{props.name}</CardTitle>
             <CardSubtitle>{props.birth_year}</CardSubtitle>
             <CardText>I've worked **s off on this, ughh.</CardText>
             <Button>Read More</Button>
           </CardBody>
         </Card>
        
      </>
        
    )
  }
  
  export default starwars;