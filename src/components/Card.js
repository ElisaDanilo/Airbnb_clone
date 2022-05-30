import React from 'react'
import "./css/Card.css"

function Card({src, title, description}) {
  return (
    <div className='card'>
        <img src={src} alt="" />
        <div className='card_info'>
            <h3>{title}</h3>
            <h5>{description}</h5>
        </div>
    </div>
  )
}

export default Card