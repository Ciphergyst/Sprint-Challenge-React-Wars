import React from "react";
import  { Starwarslist }from "./components/Starwarslist"

const Cards = props => {
    return (
        <div className="characterCard" key={props.id}>
         <img className="characterPhoto" alt="Star Wars Character" src={props.imgUrl} />
         <h2>{props.name}</h2>
            <h3>{props.species}</h3>
            <h4>{props.homeworld}</h4>
        </div>    
    );
};

export default Cards;



