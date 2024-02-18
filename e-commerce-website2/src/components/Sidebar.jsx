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
          <Link to="/more/WomenFashion" className="sidelink">
            <div className="barListitem">Women's Fashion</div>
          </Link>
          <Link className="item-link" to="/more/MenFashion">
            <div className="barListitem">Men's Fashion</div>
          </Link>
          <Link className="item-link" to="/more/electronics">
            <div className="barListitem">Electronics</div>
          </Link>
          <Link className="item-link" to="/more/Lifestyles">
            <div className="barListitem">Home & Lifestyle</div>
          </Link>
          <Link className="item-link" to="/more/Medicines">
            <div className="barListitem">Medicine</div>
          </Link>
          <Link className="item-link" to="/more/Sports&Outdoor">
            <div className="barListitem">Sports & Outdoor</div>
          </Link>
          <Link className="item-link" to="/more/Baby&Toy's">
            <div className="barListitem"> Baby's & Toys</div>
          </Link>
          <Link className="item-link" to="/more/Groceries&Pets">
            <div className="barListitem">Groceries & Pets</div>
          </Link>
          <Link className="item-link" to="/more/Health&Beauty">
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
                <Link to="/more/WomenFashion" className="sidelink">
                  <div className="barListitem">Women's Fashion</div>
                </Link>
                <Link className="item-link" to="/more/MenFashion">
                  <div className="barListitem">Men's Fashion</div>
                </Link>
                <Link className="item-link" to="/more/electronics">
                  <div className="barListitem">Electronics</div>
                </Link>
                <Link className="item-link" to="/more/Lifestyles">
                  <div className="barListitem">Home & Lifestyle</div>
                </Link>
                <Link className="item-link" to="/more/Medicines">
                  <div className="barListitem">Medicine</div>
                </Link>
                <Link className="item-link" to="/more/Sports&Outdoor">
                  <div className="barListitem">Sports & Outdoor</div>
                </Link>
                <Link className="item-link" to="/more/Baby&Toy's">
                  <div className="barListitem"> Baby's & Toys</div>
                </Link>
                <Link className="item-link" to="/more/Groceries&Pets">
                  <div className="barListitem">Groceries & Pets</div>
                </Link>
                <Link className="item-link" to="/more/Health&Beauty">
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
