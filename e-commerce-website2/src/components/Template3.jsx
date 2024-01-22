import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Card from './Card';
import { useLocation } from 'react-router-dom';

const SearchResult = () => {
  const location = useLocation();
  const searchQuery = new URLSearchParams(location.search).get('q');
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:3000/api/products');
        setProducts(response.data);
      } catch (err) {
        console.log(err);
      }
    };

    fetchData(); // Initial fetch

    // If searchQuery changes, fetch data again
    if (searchQuery) {
      fetchData();
    }
  }, [searchQuery]);

  const filteredProducts = products.filter(
    (product) =>
      product.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className='Templatehead'>
      <h1 className='heading1' id='templateHeading'>{searchQuery.toLowerCase()}</h1>
      <div className="TemplateContainer">
      {filteredProducts.length === 0 ? (
          <p>No results found</p>
        ) : (
          filteredProducts.map((ele) => (
            <div className="Template" key={ele.id}>
              <Card id={ele.id} image={ele.image} price={ele.price} title={ele.title} />
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default SearchResult;
