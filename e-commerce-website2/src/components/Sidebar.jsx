import React from 'react'
import './SidePannel.css'
import { Link } from 'react-router-dom'

const Sidebar = () => {
  return (
    <div className='sidepannel'>
        <ul className='barList'>
            <li className='barListitem'>Women's Fashion</li>
            <li className='barListitem'>Men's Fashion</li>
            <li className='barListitem'>Electronics</li>
            <li className='barListitem'>Home & Lifestyle</li>
            <li className='barListitem'>Medicine</li>
            <li className='barListitem'>Sports & Outdoor</li>
            <li className='barListitem'> Baby's & Toys</li>
            <li className='barListitem'>Groceries & Pets</li>
            <li className='barListitem'>Health & Beauty</li>
        </ul>

    </div>
  )
}

export default Sidebar