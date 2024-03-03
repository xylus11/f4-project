import React from 'react'
import './Card.css'

export default function Card({name,branch,delivery,district,state}) {
  return (
    <div className='Card'>
        <p className='card-prop'>Name : {name}</p>
        <p className='card-prop'>Branch Type : {branch}</p>
        <p className='card-prop'>Delivery Status : {delivery}</p>
        <p className='card-prop'>District : {district}</p>
        <p className='card-prop'>State : {state}</p>
    </div>
  )
}
