import React from 'react'
import './FastDelivery.css'
import DeliveryBox from './DeliveryBox'
import delivery from '../images/delivery.png'
import customerService from '../images/customerService.png'
import verified from '../images/verified.png'

const FastDelivery = () => {
  return (
    <div className='fastdelivery'>
        <DeliveryBox image={delivery} title="FREE AND FAST DELIVERY" about="Free delivery for all orders over $140"/>
        <DeliveryBox image={customerService} title="24/7 CUSTOMER SERVICE" about="Friendly 24/7 customer support"/>
        <DeliveryBox image={verified} title="MONEY BACK GUARANTEE" about="We return money within 30 days"/>
    </div>
  )
}

export default FastDelivery