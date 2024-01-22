import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import axios from 'axios'
import Card from './Card'
import './Template.css'
import Sidebar from './Sidebar'
import { useParams } from 'react-router'


const Template = () => {
 
  const {category} = useParams();
  const[Products,setProducts] = useState([]);

  useEffect(()=>{
   const fetchData = async ()=>{
    try{
      const response = await axios.get('http://localhost:3000/api/products');
      setProducts(response.data);
    }
    catch(err){
      console.log(err);
    }
   }
   fetchData();
  })

  const filteredProducts = Products.filter((product) => product.category === category);

  
  return (
    <>
      <div className='Templatehead'>
        <h1 className='heading1' id='templateHeading'>{category}</h1>
        <div className="TemplateContainer">
          {
            filteredProducts.map((ele) => {
              return (
                <div className="Template">
                  <Card id={ele.id} image={ele.image} price={ele.price} title={ele.title} />
                </div>

              )
            })
          }
        </div>
      </div>
    </>
  )
}

export default Template


