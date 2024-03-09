import React from 'react'
import './Frame.css'
import jbl from '../images/jblspeaker.jpg'
const Frame = () => {
  return (
    <div className='frame'>
         <div class="boombox">
        <div class="boombox-left">
          <p>Categories</p>
          <h1>Enhance Your Music Experience</h1>
          <div class="clock"></div>
           <div class="btn">
            <button id="buybtn">Buy Now</button>
           </div>
        </div>
        <div class="boombox-right">
            
        </div>
    </div>

    </div>
  )
}

export default Frame