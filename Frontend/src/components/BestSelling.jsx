import React, { useEffect, useState } from "react";
import "./BestSelling.css";
import Card from "./Card";
import axios from "axios";
// import Products from './Data'

const BestSelling = () => {
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
