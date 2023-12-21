import React from 'react'
import './Navbar.css'
// import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { NavLink, Link } from 'react-router-dom';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';

const Navbar = () => {
  return (
    <div>

<nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">EXCLUSIVE</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <NavLink className="nav-link" aria-current="page" to="/">Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" aria-current="page" to="Contact">Contact</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" aria-current="page" to="About">About</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" aria-current="page" to="Signup">SignUp</NavLink>
        </li>
      </ul>
      <form className="d-flex" role="search" id="searchbox">
        <input className="form-control me-5" type="search" placeholder="What are you looking for?" aria-label="Search"/>
         {/* <img src={ShoppingCartIcon} alt="" /> */}
         <ShoppingCartOutlinedIcon id="shoppingcart"/>
      </form>
    </div>
  </div>
</nav>
    </div>
  )
}

export default Navbar