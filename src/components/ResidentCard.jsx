import axios from 'axios'
import React, { useEffect, useState } from 'react'
import "./style/ResidentCard.css"

const ResidentCard = ({ residentURL }) => {

  const [residentInfo, setResidentInfo] = useState()

  useEffect(() => {
    axios.get(residentURL)
      .then((res) => setResidentInfo(res.data))
      .catch((err) => console.log(err))


  }, [])

  return (
    <div>
      <article className='residentCard'>
        <div className='residentCard__img'>
          <img src={residentInfo?.image} alt="" />
        </div>
        <div className='residentCard__status'>
          <div className={`residentCard__status-circle ${residentInfo?.status}`}></div>
            <h4 className='residentCard__statusName'>{residentInfo?.status}</h4>
        </div>
        <section className='residentCard__info'>
          <h3 className='residentCard__name'>{residentInfo?.name}</h3>
          <hr className='residentCard__line'/>
          <ul className='residentCard__list'>
            <li className='residentCard__item'><span>Species: </span>{residentInfo?.species}</li>
            <li className='residentCard__item'><span>Origins: </span>{residentInfo?.origin.name}</li>
            <li className='residentCard__item'><span>Episodes where appears: </span>{residentInfo?.episode.length}</li>
          </ul>
        </section>

      </article>
    </div>

  )
}

export default ResidentCard