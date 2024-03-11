import React from "react";
import "./Category.css";
import Box from "./Box";
import Camera from "../../public/images/Camera.jpg";
import Computer from "../../public/images/Computer.jpg";
import Gamepad from "../../public/images/Gamepad.jpg";
import Headphone from "../../public/images/Headphone.jpg";
import Cellphone from "../../public/images/Cellphone.jpg";
import { Link } from "react-router-dom";
const Category = () => {
  return (
    <div className="category">
      <div className="writingSection" data-aos="fade-right">
        <h4 className="heading4">Categories</h4>
        <h1 className="heading1">Browse By Category</h1>
      </div>
      <div className="boxCategory">
        <Link to="/more/Phones">
          <Box image={Cellphone} />
        </Link>
        <Link to="/more/Computers">
          <Box image={Computer} />
        </Link>
        <Link to="/more/Headphones">
          <Box image={Headphone} />
        </Link>
        <Link to="/more/Camera">
          <Box image={Camera} />
        </Link>
        <Link to="/more/Gamepad">
          <Box image={Gamepad} />
        </Link>
      </div>
      <hr className="horizontalline" />
    </div>
  );
};

export default Category;
