import React, { useEffect, useState } from 'react'
import "./checkout.css"
import { useSelector } from 'react-redux';
import { jwtDecode } from 'jwt-decode';
import axios from 'axios';

function Checkout() {
  // const cartitems = useSelector((state) => state.cartitems);
  const token = localStorage.getItem('token')
  const decodedToken = jwtDecode(token);
  const userId = decodedToken._id;
  const [Products, setProducts] = useState([]);
  const [couponCode, setCouponCode] = useState('');
  const [discount, setDiscount] = useState(0);
  const [clicked, setClicked] = useState(false)
  const [applied, setApplied] = useState(false)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`https://e-commerce-backend-opis.onrender.com/api/getcartitems/${userId}`)
        setProducts(response.data.cartitems);
      }
      catch (err) {
        console.log(err);
      }
    }
    fetchData();

  }, [userId])
  let total = 0;

  const applyCoupon = async () => {
    setClicked(true)
    try {
      const response = await axios.get(`https://e-commerce-backend-opis.onrender.com/api/applycoupon?couponCode=${couponCode}`)
      const discount = response.data.discount;
      setDiscount(discount);
      setApplied(true)
    }
    catch (err) {
      console.log(err);
    }
    setClicked(false)
  }

  return (
    <div className='mmain'>
      <div className='lleft'>
        <h3 id='billing'>Billing Details</h3>
        <div className='detail'>
          Full Name<span className='opt'>*</span>
          <br />
          <input type="text" className='check1' required />
        </div>
        <div className='detail'>
          Address<span className='opt' required>*</span>
          <br />
          <input type="text" className='check1' />
        </div>
        <div className='detail'>
          Town/City<span className='opt'>*</span>
          <br />
          <input type="text" className='check1' required />
        </div>
        <div className='detail'>
          Phone Number<span className='opt'>*</span>
          <br />
          <input type="text" className='check1' required />
        </div>
        <div className='detail'>
          Email Address<span className='opt'>*</span>
          <br />
          <input type="text" className='check1' required />
        </div>

      </div>

      <div className="rright">
        <div >
          {
            Products.map((cartitem) => {
              total = cartitem.price * (cartitem.quantity) + total;
              return (
                <li>
                  <div className="rright-top">
                    <img src={cartitem.image} alt="pic" className='imgcheckk' />
                    <span>{cartitem.title}</span>
                    <span>${cartitem.price}</span>
                  </div>
                </li>
              )
            })
          }

          <div className="rright-top">
            <span>Total without coupon:</span>
            <span>${total}</span>
          </div>
          <hr />
          <div className="rright-top">
            <span>Shipping:</span>
            <span>Free</span>
          </div>
          <hr />
          <div className="rright-top">
            <span>Total:</span>
            <span>${total - discount}</span>
          </div>

          <div>

            <div id='couppp'>
              <input type="text" className='inputcheck' disabled={applied} placeholder='Coupon Code' value={couponCode} onChange={(e) => setCouponCode(e.target.value)} />
              <button className={applied ? 'btncheck1' : 'btncheck'} onClick={applyCoupon} disabled={clicked || applied}>
                {clicked ? "Applying..." : applied ? "Coupon Applied" : "Apply Coupon"}
              </button>
            </div>
            <div>
              <button className='btncheck'>Place Order</button>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Checkout