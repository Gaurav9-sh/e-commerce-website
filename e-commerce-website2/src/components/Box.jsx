import React from 'react'
import './Box.css'
const Box = (props) => {
  return (
    <>
        <div className='categoryBox'>
          <img src={props.image} alt="" />
          <p style={{ fontWeight: '700',color:'black' }}>{props.title}</p>
        </div>
    </>
  )
}

export default Box