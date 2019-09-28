import React from 'react'

export default function Starwarslist({ starwars }) {
    return (
        <div>
         {starwars.map(s => (
           <div key={s}>{s}</div>   
         ))}   
        </div>
    )
}
