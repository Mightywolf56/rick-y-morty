import React from 'react'
import "./style/ResidentForm.css" 

const ResidentForm = ({ handleSubmit }) => {
  return (
    <section className='ResidenForm__container'>
      <form className='ResidentForm__' onSubmit={handleSubmit}>
        <input type="text" id='idLocation' placeholder='type of location id' />
        <button>Search</button>
      </form>
    </section>
  )
}

export default ResidentForm