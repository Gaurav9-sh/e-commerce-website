import React from "react";
import "./SidePannel.css";
import { Link, NavLink } from "react-router-dom";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";

const Sidebar = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <div className="sidepannel sidepannel-hidden">
        <div className="barList">
          <Link to="/WomenFashion" className="sidelink">
            <div className="barListitem">Women's Fashion</div>
          </Link>
          <Link className="item-link" to="/MenFashion">
            <div className="barListitem">Men's Fashion</div>
          </Link>
          <Link className="item-link" to="/electronics">
            <div className="barListitem">Electronics</div>
          </Link>
          <Link className="item-link" to="/Lifestyles">
            <div className="barListitem">Home & Lifestyle</div>
          </Link>
          <Link className="item-link" to="/Medicines">
            <div className="barListitem">Medicine</div>
          </Link>
          <Link className="item-link" to="/Sports&Outdoor">
            <div className="barListitem">Sports & Outdoor</div>
          </Link>
          <Link className="item-link" to="/Baby&Toy's">
            <div className="barListitem"> Baby's & Toys</div>
          </Link>
          <Link className="item-link" to="/Groceries&Pets">
            <div className="barListitem">Groceries & Pets</div>
          </Link>
          <Link className="item-link" to="/Health&Beauty">
            <div className="barListitem">Health & Beauty</div>
          </Link>
        </div>
      </div>
      <div className="sidepanel2">
        <Offcanvas show={show} onHide={handleClose}>
          <Offcanvas.Header closeButton>
            <Offcanvas.Title className="head-side">Categories</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <div className="sidepannel">
              <div className="barList">
                <Link to="/WomenFashion" className="sidelink">
                  <div className="barListitem">Women's Fashion</div>
                </Link>
                <Link className="item-link" to="/MenFashion">
                  <div className="barListitem">Men's Fashion</div>
                </Link>
                <Link className="item-link" to="/electronics">
                  <div className="barListitem">Electronics</div>
                </Link>
                <Link className="item-link" to="/Lifestyles">
                  <div className="barListitem">Home & Lifestyle</div>
                </Link>
                <Link className="item-link" to="/Medicines">
                  <div className="barListitem">Medicine</div>
                </Link>
                <Link className="item-link" to="/Sports&Outdoor">
                  <div className="barListitem">Sports & Outdoor</div>
                </Link>
                <Link className="item-link" to="/Baby&Toy's">
                  <div className="barListitem"> Baby's & Toys</div>
                </Link>
                <Link className="item-link" to="/Groceries&Pets">
                  <div className="barListitem">Groceries & Pets</div>
                </Link>
                <Link className="item-link" to="/Health&Beauty">
                  <div className="barListitem">Health & Beauty</div>
                </Link>
              </div>
            </div>
          </Offcanvas.Body>
        </Offcanvas>
        <div className="resp-bar" onClick={handleShow}>
          C <br /> A <br /> T <br /> E <br /> G <br /> O <br /> R <br /> I
          <br /> E <br /> S
        </div>
      </div>
    </>
  );
};

export default Sidebar;
