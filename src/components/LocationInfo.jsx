import React from 'react'
import './styles/location.css'

const LocationInfo = ({location}) => {
  return (
  <article className='type'>
      <div><h2>{location?.name}</h2>
      <ul>
        <li><span>Type: </span>{location?.type}</li>
        <li><span>Dimension: </span>{location?.dimension}</li>
        <li><span>Population: </span>{location?.residents.length}</li>
      </ul></div>
    </article>
  )
}

export default LocationInfo