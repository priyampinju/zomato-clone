import React from 'react'
import './deliveryItems.css'

const DeliveryItems = ({item}) => {
  return (
    <div className='delivery-item'>
        <div className="delivery-item-cover">
            <img src={item.image} alt={item.title} className='delivery-item-image' />
        </div>
        <div className="delivery-item-title">
            <div className="title">
            {item.title}
            </div>
        </div>
    </div>
  )
}

export default DeliveryItems
