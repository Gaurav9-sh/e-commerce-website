import React from "react";
import "./Category.css";
import Box from "./Box";
import Camera from "../../public/images/Camera.jpg";
import Computer from "../../public/images/Computer.jpg";
import Gamepad from "../../public/images/Gamepad.jpg";
import Headphone from "../../public/images/Headphone.jpg";
import Cellphone from "../../public/images/Cellphone.jpg";
import Camera2 from '../../public/images/Category-Camera.png'
import Cellphone2 from '../../public/images/Category-CellPhone.png'
import Computer2 from '../../public/images/Category-Computer.png'
import Gamepad2 from '../../public/images/Category-Gamepad.png'
import Headphone2 from '../../public/images/Category-Headphone.png'
import { Link } from "react-router-dom";
const Category = () => {
  return (
    <div className="category">
      <div className="writingSection" data-aos="fade-right">
        <h4 className="heading4">Categories</h4>
        <h1 className="heading1">Browse By Category</h1>
      </div>
      <div className="boxCategory">
        <Link to="/Phones">
          <Box image={Cellphone} hoverimage={Cellphone2} />
        </Link>
        <Link to="/Computers">
          <Box image={Computer} hoverimage={Computer2}/>
        </Link>
        <Link to="/Headphones">
          <Box image={Headphone} hoverimage={Headphone2}/>
        </Link>
        <Link to="/Camera">
          <Box image={Camera} hoverimage={Camera2}/>
        </Link>
        <Link to="/Gamepad">
          <Box image={Gamepad} hoverimage={Gamepad2}/>
        </Link>
      </div>
      <hr className="horizontalline" />
    </div>
  );
};

export default Category;
