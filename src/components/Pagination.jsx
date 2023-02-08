import React from 'react'
import { numbersPage } from '../utile/handlePagination'
import "./style/Pagination.css"

const Pagination = ({ setPage, RESIDENTS_PERPAGE, location, }) => {
  return (
    <section className='pagination__container'>
      <ul className='pagination__list'>

        {
          numbersPage(location, RESIDENTS_PERPAGE).map(numberPage =>
            <li className='pagination__item' onClick={() => setPage(numberPage)} key={numberPage}>{numberPage}</li>)
        }
        


      </ul>
    </section>
  )
}

export default Pagination