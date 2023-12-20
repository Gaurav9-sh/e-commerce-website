import React from 'react'
import './Card.css'
import Star from '../images/Star.jpg'

const Card = (props) => {
  return (
    <div className='card'>
      <div className="sale">-35%</div>
        <div className="cardImage">
            <img src={props.image}  alt="" />
        </div>
        <h4 style={{fontFamily:"poppins", fontSize:"1rem", fontWeight:"600", marginTop:"1rem"}}>{props.title}</h4>
        <div className="specification">
        <p style={{color:"#DB4444", fontFamily:"poppins"}}>${props.price}</p> <p style={{fontFamily:"poppins", color:"grey"}}>${props.price2}</p>
        </div>
        <div className="starContainer" style={{marginTop:"-1rem"}}>
          <img src={Star}  style = {{height: "1rem", width: "1rem"}} alt="" />
          <img src={Star}  style = {{height: "1rem", width: "1rem"}} alt="" />
          <img src={Star}  style = {{height: "1rem", width: "1rem"}} alt="" />
          <img src={Star}  style = {{height: "1rem", width: "1rem"}} alt="" />
          <img src={Star}  style = {{height: "1rem", width: "1rem"}} alt="" />
        </div>
        
       

    </div>
  )
}

export default Card