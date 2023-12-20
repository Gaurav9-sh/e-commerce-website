import React from 'react'
import './OurProducts.css'
import Card from './Card'
import camera2 from '../images/camera2.jpg'
import controller from '../images/controller.jpg'
import dairymilk from '../images/dairymilk.jpg'
import jacket2 from '../images/jacket2.jpg'
import mercedes from '../images/mercedes.jpg'
import sportsshoes from '../images/sportsshoes.jpg'
import laptop from '../images/laptop.jpg'
import  bag from '../images/bag.jpg'
const OurProducts = () => {
  return (
    <div className='ourproducts'>
         <div className="writingSection">
          <h4 className='heading4'>Our Products</h4>
          <h1 className='heading1'>Explore Our Products</h1>
        </div>
        <div className="cardsSection" id='productssection'>
          <Card image={dairymilk} title="Breed Dry Dog Food" price="100" price2="240"/>
          <Card image={camera2} title="CANON EOS DSLR Camera" price="220" price2="340"/>
          <Card image={laptop} title="ASUS FHD Gaming Laptop" price="700" price2="880"/>
          <Card image={mercedes} title="Kids Electric Car" price="440" price2="540"/>
        </div>
        <div className="cardsSection" id='productssection2'>
        <Card image={sportsshoes} title="Jr.Zoom Soccer Cleats" price="1100" price2="1240"/>
          <Card image={controller} title="GP11 Shooter USB Gamepad" price="660" price2="745"/>
          <Card image={jacket2} title="Quilted Jacket" price="600" price2="720"/>
          <Card image={bag} title="Gucci duffle bag" price="600" price2="720"/>
        </div>
    </div>
  )
}

export default OurProducts