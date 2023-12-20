import React from 'react'
import './Box.css'
const Box = (props) => {
  return (
    <div className='categoryBox'>
       <img src={props.image} alt="" />
       <p style={{fontFamily:'poppins', fontWeight:'400'}}>{props.title}</p>
    </div>
  )
}

export default Box