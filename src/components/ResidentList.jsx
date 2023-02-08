import React from 'react'
import ResidentCard from './ResidentCard'
import "./style/ResidentList.css"

const ResidentList = ({pagination}) => {
  return (
    <section className='residentList'>
      
      {
        pagination()?.map(residentURL => <ResidentCard key={residentURL} residentURL={residentURL} />)
        
      }
      
      </section>
  )
}

export default ResidentList