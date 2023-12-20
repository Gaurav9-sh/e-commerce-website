import React from 'react'
import './DeliveryBox.css'

const DeliveryBox = (props) => {
  return (
    <div className='deliveryBox'>
        <img src={props.image} alt=""/>
        <h4>{props.title}</h4>
        <p>{props.about}</p>
    </div>
  )
}

export default DeliveryBox