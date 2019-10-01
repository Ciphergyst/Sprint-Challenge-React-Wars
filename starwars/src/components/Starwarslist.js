import React from 'react'
import starwarsCharacters from "./Cards/cards"

export default function Starwarslist({ starwars }) {
    return (
        <div>
         {starwars.map(s => (
           <div key={s}>{s}</div>   
         ))}   
        </div>
    )
}
