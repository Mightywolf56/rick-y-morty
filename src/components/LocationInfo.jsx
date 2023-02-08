import React from 'react'
import "./style/LocationInfo.css"

const LocationInfo = ({location}) => {
  return (
    <section className='locationInfo__container'>
      <div>
        <ul   className='locationInfo__list'>
          <li className='locationInfo__name'><span>Name: </span>{location?.name}</li>
          <li className='locationInfo__item'><span>Type: </span>{location?.type}</li>
          <li className='locationInfo__item'><span>Dimension: </span>{location?.dimension}</li>
          <li className='locationInfo__item'><span>Population: </span>{location?.residents.length}</li> 
        </ul>
      
      </div>  
      </section>
  )
}

export default LocationInfo