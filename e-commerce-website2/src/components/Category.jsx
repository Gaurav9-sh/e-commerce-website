import React from 'react'
import './Category.css'
import Box from './Box'
import Camera from '../images/Camera.jpg'
import Computer from '../images/Computer.jpg'
import Gamepad from '../images/Gamepad.jpg'
import Headphone from '../images/Headphone.jpg'
import Cellphone from '../images/Cellphone.jpg'
const Category = () => {
  return (
    <div className='category'>
        <div className="writingSection">
          <h4 className='heading4'>Categories</h4>
          <h1 className='heading1'>Browse By Category</h1>
        </div>
        <div className="boxCategory">
          <Box image={Cellphone} title="Phones" />
          <Box image={Computer} title="Computers" />
          <Box image={Headphone} title="Headphone" />
          <Box image={Camera} title="Camera" />
          <Box image={Gamepad} title="Gamepad" />
        </div>
        <hr className="horizontalline"  />
    </div>
  )
}

export default Category