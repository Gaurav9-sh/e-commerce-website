import React from 'react'
import './BestSelling.css'
import Card from './Card'
import jacket from '../images/jacket.jpg'
import bag from '../images/bag.jpg'
import speaker from '../images/speaker.jpg'
import cupboard from '../images/cupboard.jpg'
const BestSelling = () => {
  return (
    <div className='bestSelling'>
        <div className="writingSection">
          <h4 className='heading4'>This Month</h4>
          <h1 className='heading1'>Best Selling Products</h1> 
        </div>

        <div className="cardsSection" id='sellingproduct'>
            <Card image={jacket} title="The north coat" price="260" price2="360"/>
            <Card image={bag} title="Gucci duffle bag" price="960" price2="1160"/>
            <Card image={speaker} title="RGB iquid CPU Cooler" price="160" price2="170"/>
            <Card image={cupboard} title="  Small BookSelf" price="360" price2="460"/>
        </div>
    </div>
  )
}

export default BestSelling