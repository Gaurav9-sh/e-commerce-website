import React from 'react'
import './Navbar.css'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const Navbar = () => {
  return (
    <div>

<nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Navbar</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" aria-current="page" href="#">Contact</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" aria-current="page" href="#">About</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" aria-current="page" href="#">SignUp</a>
        </li>
      </ul>
      <form className="d-flex" role="search" id="searchbox">
        <input className="form-control me-5" type="search" placeholder="What are you looking for?" aria-label="Search"/>
         {/* <img src={ShoppingCartIcon} alt="" /> */}
         <ShoppingCartIcon id="shoppingcart"/>
      </form>
    </div>
  </div>
</nav>
    </div>
  )
}

export default Navbar