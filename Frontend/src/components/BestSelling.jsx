import React, { useEffect, useState } from "react";
import "./BestSelling.css";
import Card from "./Card";
import axios from "axios";
import {Grid } from 'react-loader-spinner'

const BestSelling = () => {
  const [Products, setProducts] = useState([]);
  const[loading,setLoading] = useState(true)
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://e-commerce-backend-opis.onrender.com/api/products");
        setProducts(response.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  });

  return (
    <div className="bestSelling">
      <div className="writingSection" data-aos="fade-right">
        <h4 className="heading4">This Month</h4>
        <h1 className="heading1">Best Selling Products</h1>
      </div>
      <br />

      <div className="cardsSection" id="sellingproduct">
        {Products.slice(45, 49).map((ele) => {
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

export default BestSelling;
