import React, { useState, useEffect } from "react";
import "./OurProducts.css";
import Card from "./Card";
import axios from "axios";
// import Products from './Data'

const OurProducts = () => {
  const [Products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:3000/api/products");
        setProducts(response.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, []);

  const getRandomProducts = () => {
    const startIndex = Math.floor(Math.random() * (Products.length - 4)); // Adjust 4 based on the number of products you want to display
    return Products.slice(startIndex, startIndex + 4);
  };

  return (
    <div className="ourproducts">
      <div className="writingSection" data-aos="fade-right">
        <h4 className="heading4">Our Products</h4>
        <h1 className="heading1">Explore Our Products</h1>
        <br />
      </div>
      <div className="cardsSection" id="productssection">
        {getRandomProducts().map((ele) => {
          return (
            <Card
              id={ele.id}
              image={ele.image}
              price={ele.price}
              title={ele.title}
            />
          );
        })}
      </div>
      <div className="cardsSection" id="productssection2">
        {getRandomProducts().map((ele) => {
          return (
            <Card
              id={ele.id}
              image={ele.image}
              price={ele.price}
              title={ele.title}
            />
          );
        })}
      </div>
    </div>
  );
};

export default OurProducts;
