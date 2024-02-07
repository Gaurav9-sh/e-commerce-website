import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeToCart, updateCartItems } from './addtocartSlice';
import './Cart.css';
import EmptyCart from './EmptyCart';
import { useState } from 'react';
import { jwtDecode } from 'jwt-decode';
import axios from 'axios';
import { useEffect } from 'react';
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router';
import { CSSProperties } from "react";
import ClipLoader from "react-spinners/ClipLoader";
import { Audio, Grid } from 'react-loader-spinner'

const Cart = () => {
  let [loading, setLoading] = useState(true);
  let [color, setColor] = useState("#ffffff");
  const cartitems = useSelector((state) => state.cartitems);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [quantities, setQuantities] = useState({});
  const [val, setVal] = useState(0)
  const [userCartItems, setUserCartItems] = useState([]);

  const updateQuantity = (itemId, newQuantity) => {
    setQuantities((prevQuantities) => ({
      ...prevQuantities, [itemId]: newQuantity,
    }))
  }
  let total = 0;
  const dec = async (itemId) => {
    if (quantities[itemId] && quantities[itemId] > 0) {
      updateQuantity(itemId, quantities[itemId] - 1);
      await updateQuantityInDatabase(itemId, quantities[itemId] - 1);
    }

  }
  const add = async (itemId) => {

    updateQuantity(itemId, (quantities[itemId] || 0) + 1)
    await updateQuantityInDatabase(itemId, (quantities[itemId] || 0) + 1)
  }


  const token = localStorage.getItem('token');
  const decodedToken = jwtDecode(token);
  const userId = decodedToken._id;

  const updateQuantityInDatabase = async (itemId, newQuantity) => {
    try {
      await axios.patch(`http://localhost:3000/api/setQuantity/${userId}/${itemId}`, {
        quantity: newQuantity,
      });
      fetchData(); // Fetch updated cart items after updating quantity
      setLoading(false)
    } catch (error) {
      console.error('Error updating quantity:', error);
    }
  };
  const removeToCartThunk = (userId, itemId) => async (dispatch) => {
    try {
      const response = await axios.delete(`http://localhost:3000/api/cartitems/${userId}/${itemId}`);

      dispatch(removeToCart(itemId))
      setUserCartItems((prevItems) => prevItems.filter(item => item.id !== itemId));
      toast.info('Item Removed from the cart', {
        position: 'top-right',
        autoClose: 2000, // Close the notification after 2000ms (2 seconds)
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
      });
    } catch (error) {
      console.error('Error removing item from cart:', error);
    }
  };


  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/api/getcartitems/${userId}`);
        setUserCartItems(response.data.cartitems);
        setLoading(false);
      } catch (err) {
        console.log(err);
      }
    };

    fetchData();

  }, [userId]);
  return (
    <div className="cart-container">
      
      {loading ? (
       <div style={{ position: 'relative', height: '100vh' }}>
      <Grid visible={true}
        height="80"
        width="80"
        color="#DB4444"
        ariaLabel="grid-loading"
        radius="12.5"
   wrapperStyle={{ position: "fixed", top: "50%", left: "50%", transform: "translate(-50%, -50%)"}}
        wrapperClass="grid-wrapper" />
        </div>) : userCartItems.length === 0 ? (<EmptyCart />) : (
          <ul className="cart-list">
            {userCartItems.map((cartitem) => {
              const itemId = cartitem.id;
              const itemQuantity = quantities[itemId] || 1;
              total = cartitem.price * itemQuantity + total;
              return (
                <li key={cartitem.id} className="cart-item">
                  <img className="cart-item-image" src={cartitem.image} alt="" />
                  <div className="cart-item-details">
                    <p className="cart-item-title">{cartitem.title}</p>
                    <p className="cart-item-price">${cartitem.price}</p>
                  </div>
                  <button onClick={() => dec(cartitem.id)} className="dec buttn">&#8722;</button>
                  <input type="text" value={itemQuantity} readOnly className="inputt" />
                  <button onClick={() => add(cartitem.id)} className="inc buttn">	&#43;</button>
                  <button type="button" class="btn btn-danger" onClick={() => dispatch(removeToCartThunk(userId, cartitem.id))}>Remove</button>

                </li>
              )
            })}
            <div className="total">
              <h4>Total value = ${total}</h4>
            </div>
            <button type="button" class="btn btn-danger" onClick={() => navigate('/checkout')} >CheckOut</button>
          </ul>
        )}
    </div>
  );

};

export default Cart;
