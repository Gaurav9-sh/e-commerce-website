import React, { useEffect, useState } from 'react';
import './Wishlist.css'
import { jwtDecode } from 'jwt-decode';
import axios from 'axios';
import Card from './Card'
import { Grid } from 'react-loader-spinner';

const Wishlist = () => {
  const [loading, setLoading] = useState(true);
  const [wishlistItems, setWishlistItems] = useState([]);
  const token = localStorage.getItem('token');
  const decodedToken = jwtDecode(token);
  const userId = decodedToken._id;

  useEffect(() => {

    const fetchData = async () => {
      try {
        const response = await axios.get(`https://e-commerce-backend-opis.onrender.com/api/wishlist/${userId}`)
        const actualItems = Array.isArray(response.data) ? response.data : response.data.wishlistItems;
        setWishlistItems(actualItems)
        setLoading(false);
      }
      catch (err) {
        console.log(err)
      }

    }
    fetchData();
  }

    , [])
  return (
    <div className="wishlist-container">
      {loading ? (
        <div style={{ position: 'relative', height: '100vh' }}>
          <Grid visible={true}
            height="80"
            width="80"
            color="#DB4444"
            ariaLabel="grid-loading"
            radius="12.5"
            wrapperStyle={{ position: "fixed", top: "50%", left: "50%", transform: "translate(-50%, -50%)" }}
            wrapperClass="grid-wrapper" />
        </div>
      ) : (
        <>
          <h1>Your Wishlist</h1>
          {wishlistItems.length === 0 ? (
            <img src="https://www.beatsmed.com/static/images/empty-wishlist.png" alt="" />
          ) : (
            <div className="wishlist-items">
              {wishlistItems.map((item) => (
                <div className="wishlist-item" key={item.id}>
                  <Card  id={item.id} image={item.image} title={item.title} price={item.price} />
                </div>
              ))}
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default Wishlist;
