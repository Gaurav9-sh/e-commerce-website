import React, { useEffect, useRef, useState } from 'react'
import './saleSection.css'
import Card from './Card'
import image1 from '../images/image1.jpg'
import image2 from '../images/image2.jpg'
import image3 from '../images/image3.jpg'
import image4 from '../images/image4.jpg'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import axios from 'axios'
// import Products from './Data'


const SalesSection = () => {

     const [products, setProducts] = useState([]);

    useEffect(() =>{
     const fetchData = async () => {
          try{
               const response = await axios.get("http://localhost:3000/api/products");
               setProducts(response.data);
          }
          catch(err){
               console.log(err);
          }
     }
     fetchData();
    },[])
     
     const boxRef = useRef(null);

     const btnpressnext = () => {
          if (boxRef.current) {
               let width = boxRef.current.clientWidth / 5;
               boxRef.current.scrollLeft = boxRef.current.scrollLeft + width;
               boxRef.current.scrollBy({ left: width, behavior: 'smooth' })
          }
     }
     
     const btnpressprev = () => {
          if (boxRef.current) {
               let width = boxRef.current.clientWidth / 5;
               boxRef.current.scrollLeft = boxRef.current.scrollLeft - width;
               boxRef.current.scrollBy({ left: -width, behavior: 'smooth' })
          }
     }

    const getRandomProducts = () => {
     const startIndex = Math.floor(Math.random() * (products.length - 7));
     return products.slice(startIndex,startIndex+7);
    }

     return (
          <div className='saleSection'>
               <div className="writingSection">
                    <h4 className='heading4'>Today's</h4>
                    <div className="slidingClass">
                         <h1 className='heading1'>Flash Sales</h1>
                         <div className="buttonClass">
                              <button onClick={btnpressprev}><ArrowBackIosIcon /></button>
                              <button onClick={btnpressnext}><ArrowForwardIosIcon /></button>
                         </div>
                    </div>
               </div>
               <div className="cardsSection" ref={boxRef}>
                    {
                         getRandomProducts().map((ele) => {
                              return (
                                   <Card id={ele.id} image={ele.image} price={ele.price} title={ele.title} />
                              )
                         })
                    }
               </div>
          </div>
     )
}

export default SalesSection