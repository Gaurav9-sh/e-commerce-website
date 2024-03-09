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
  const[collapsed, setCollapsed] = useState(true);

  const handleNavLinkClick = () => {
    setCollapsed(true);
  }
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
    setCollapsed(true);
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
            onClick={() => setCollapsed(!collapsed)}
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          
          <div className={`collapse navbar-collapse ${collapsed ? "" : "show"}`} id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink className="nav-link" aria-current="page" to="/" onClick={handleNavLinkClick}>
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" aria-current="page" to="Contact" onClick={handleNavLinkClick}>
                  Contact
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" aria-current="page" to="About" onClick={handleNavLinkClick}>
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
                      onClick={handleNavLinkClick}
                    >
                      SignUp
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink
                      className="nav-link"
                      aria-current="page"
                      to="login"
                      onClick={handleNavLinkClick}
                    >
                      Login
                    </NavLink>
                  </li>
                </>
              )}
            </ul>

    

            <div className="cart-user">
              {token ? (
                <div className="cart">
                  <Link to="Cart" onClick={handleNavLinkClick}>
                    <ShoppingCartCheckoutOutlinedIcon id="shoppingcart" />
                  </Link>
                </div>
              ) : (
                <></>
              )}
              <div className="fav">
                {token ? (
                  <Link to="wishlist" onClick={handleNavLinkClick}>
                    {" "}
                    <FavoriteBorderIcon id="favIcon" />{" "}
                  </Link>
                ) : (
                  <></>
                )}
              </div>

              <div className="user">
                {token ? (
                  <Link to="user" onClick={handleNavLinkClick}>
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
