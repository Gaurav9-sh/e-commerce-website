import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import axios from 'axios'
import Card from './Card'
import './Template.css'
import {Grid} from 'react-loader-spinner'
import { useParams } from 'react-router'


const Template = () => {
  const {category} = useParams();
  const[Products,setProducts] = useState([]);
  const [loading,setLoading] = useState(true)

  useEffect(()=>{
   const fetchData = async ()=>{
    try{
      const response = await axios.get(`https://e-commerce-backend-opis.onrender.com/api/products/${category}`);
      setProducts(response.data);
      setLoading(false)
    }
    catch(err){
      console.log(err);
    }
   }
   fetchData();
  })

 

  
  return (
    <>
      <div className='Templatehead'>
        <h1 className='heading1' id='templateHeading'>{category}</h1>
       {
        loading ? (
          <div style={{ position: 'relative', height: '100vh' }}>
          <Grid visible={true}
            height="80"
            width="80"
            color="#DB4444"
            ariaLabel="grid-loading"
            radius="12.5"
       wrapperStyle={{ position: "fixed", top: "50%", left: "50%", transform: "translate(-50%, -50%)"}}
            wrapperClass="grid-wrapper" />
        </div>) : (
          
<div className="TemplateContainer">
{
  Products.map((ele) => {
    return (
      <div className="Template">
        <Card id={ele.id} image={ele.image} price={ele.price} title={ele.title} />
      </div>

    )
  })
}
</div>
        )
       }
      </div>
    </>
  )
}

export default Template


