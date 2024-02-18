import React, { useState } from "react";
import "./Navbar.css";
import { NavLink, Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShoppingCartCheckoutOutlinedIcon from "@mui/icons-material/ShoppingCartCheckoutOutlined";

const Navbar = () => {
  const [searchQuerry, setSearchQuerry] = useState("");
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  const handleOnChange = (e) => {
    setSearchQuerry(e.target.value);
  };
  const handleOnSubmit = (e) => {
    e.preventDefault();

    if (searchQuerry.trim() !== "") {
      navigate(`/search?q=${encodeURIComponent(searchQuerry)}`);
    }
  };
  const handleLogout = () => {
    localStorage.removeItem("token");
  };
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            CAMIO
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink className="nav-link" aria-current="page" to="/">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" aria-current="page" to="Contact">
                  Contact
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" aria-current="page" to="About">
                  About
                </NavLink>
              </li>
              {token ? (
                <>
                  <li className="nav-item">
                    <NavLink
                      className="nav-link"
                      aria-current="page"
                      to="logout"
                      onClick={handleLogout}
                    >
                      Logout
                    </NavLink>
                  </li>
                </>
              ) : (
                <>
                  <li className="nav-item">
                    <NavLink
                      className="nav-link"
                      aria-current="page"
                      to="signup"
                    >
                      SignUp
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink
                      className="nav-link"
                      aria-current="page"
                      to="login"
                    >
                      Login
                    </NavLink>
                  </li>
                </>
              )}
            </ul>

            {/* <form className="d-flex" role="search" id="searchbox" onSubmit={handleOnSubmit}>
              <input className="form-control me" type="search" placeholder="What are you looking for?" aria-label="Search" value={searchQuerry} onChange={handleOnChange} id='navsearch' />
            </form> */}

            <div className="cart-user">
              {token ? (
                <div className="cart">
                  <Link to="Cart">
                    <ShoppingCartCheckoutOutlinedIcon id="shoppingcart" />
                  </Link>
                </div>
              ) : (
                <></>
              )}
              <div className="fav">
                {token ? (
                  <Link to="wishlist">
                    {" "}
                    <FavoriteBorderIcon id="favIcon" />{" "}
                  </Link>
                ) : (
                  <></>
                )}
              </div>

              <div className="user">
                {token ? (
                  <Link to="user">
                    <img
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpFdo7jMQ4ZhDD1zqDdGGW0HjKNbV4iiOniQ&usqp=CAU"
                      alt=""
                    />
                  </Link>
                ) : (
                  <></>
                )}
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
