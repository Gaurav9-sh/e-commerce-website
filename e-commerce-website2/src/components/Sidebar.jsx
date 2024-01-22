import React from 'react'
import './SidePannel.css'
import { Link ,NavLink } from 'react-router-dom'

const Sidebar = () => {
  return (
    <div className='sidepannel'>
        <ul className='barList'>
           <Link to="/more/WomenFashion" className='sidelink' ><li className='barListitem'>Women's Fashion</li></Link>
            <Link className='item-link' to="/more/MenFashion"><li className='barListitem'>Men's Fashion</li></Link>
            <Link className='item-link' to="/more/electronics"><li className='barListitem'>Electronics</li></Link>
            <Link className='item-link' to="/more/Lifestyles"><li className='barListitem'>Home & Lifestyle</li></Link>
            <Link className='item-link' to="/more/Medicines" ><li className='barListitem'>Medicine</li></Link>
            <Link className='item-link' to="/more/Sports&Outdoor"><li className='barListitem'>Sports & Outdoor</li></Link>
            <Link className='item-link' to="/more/Baby&Toy's" ><li className='barListitem'> Baby's & Toys</li></Link>
            <Link className='item-link' to="/more/Groceries&Pets" ><li className='barListitem'>Groceries & Pets</li></Link>
            <Link className='item-link' to="/more/Health&Beauty" ><li className='barListitem'>Health & Beauty</li></Link>
        </ul>

    </div>
  )
}

export default Sidebar