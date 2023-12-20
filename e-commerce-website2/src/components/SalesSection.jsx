import React, { useRef } from 'react'
import './saleSection.css'
import Card from './Card'
import image1 from '../images/image1.jpg'
import image2 from '../images/image2.jpg'
import image3 from '../images/image3.jpg'
import image4 from '../images/image4.jpg'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';


const SalesSection = () => {
//     let box = document.querySelector('.cardsSection');
   const boxRef = useRef(null);

   const btnpressnext = () => {
     if(boxRef.current){
          let width = boxRef.current.clientWidth/5;
          boxRef.current.scrollLeft = boxRef.current.scrollLeft + width;
          boxRef.current.scrollBy({ left: width, behavior:'smooth'})
     }   
   }  

   const btnpressprev = () => {
     if(boxRef.current){
          let width = boxRef.current.clientWidth/5;
          boxRef.current.scrollLeft = boxRef.current.scrollLeft - width;
          boxRef.current.scrollBy({ left: -width, behavior:'smooth'})
     }   
   }  



  return (
    <div className='saleSection'>
         <div className="writingSection">
              <h4 className='heading4'>Today's</h4>
              <div className="slidingClass">
              <h1 className='heading1'>Flash Sales</h1>
              <div className="buttonClass">
                <button onClick={btnpressprev}><ArrowBackIosIcon/></button>
                <button onClick={btnpressnext}><ArrowForwardIosIcon/></button>
              </div>
              </div>  
         </div>
         <div className="cardsSection" ref={boxRef}>
              <Card image={image1} price="99" price2="350" title="HAVIT HV-G92 Gamepad"/>
              <Card image={image2} price="99" price2="350" title="AK-900 Wired Keyboard"/>
              <Card image={image3} price="99" price2="350" title="IPS LCD Gaming Monitor"/>
              <Card image={image4} price="99" price2="350" title="S-Series Comfort Chair"/>
              <Card image={image1} price="99" price2="350" title="HAVIT HV-G92 Gamepad"/>
              <Card image={image2} price="99" price2="350" title="AK-900 Wired Keyboard"/>
              <Card image={image3} price="99" price2="350" title="IPS LCD Gaming Monitor"/>
              <Card image={image1} price="99" price2="350" title="HAVIT HV-G92 Gamepad"/>
              <Card image={image3} price="99" price2="350" title="IPS LCD Gaming Monitor"/>
              <Card image={image4} price="99" price2="350" title="S-Series Comfort Chair"/>
              <Card image={image1} price="99" price2="350" title="HAVIT HV-G92 Gamepad"/>
              <Card image={image2} price="99" price2="350" title="AK-900 Wired Keyboard"/>
         </div>
         <button type="button" class="btn btn-danger" id="morebutton" style={{backgroundColor:"#DB4444"}}>View All Products</button>
         {/* <hr className='horizontalline'/> */}
    </div>
  )
}

export default SalesSection