import React from "react";
import { useState , useEffect } from "react";
import { useNavigate, useParams } from "react-router";
import "./product.css"
import icondelivery from "../../public/images/icondelivery.jpg"
import iconreturn from "../../public/images/iconreturn.jpg"
import Products from "./Data";
import { useDispatch } from "react-redux";
import { addToCart } from "./addtocartSlice";
import { jwtDecode } from "jwt-decode";
import axios from "axios";
import {toast,ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

function Product() {
    window.scrollTo(0, 0);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const {id} = useParams();
    console.log(id)
    const [colour,setColour] = useState("black")
    const [isInWishlist, setIsInWishlist] = useState(false);

    const product = Products.find((pdt) => pdt.id == id);
    const [selectedImage, setSelectedImage] = useState(product ? product.image : "");
    
    useEffect(() => {
        // Check if the product is already in the user's wishlist
        // (Assuming you have a way to fetch the user's wishlist items)
        // You might need to adjust the API endpoint and logic based on your backend implementation
        const checkWishlist = async () => {
          const token = localStorage.getItem("token");
          if (token) {
            const decodedToken = jwtDecode(token);
            const userId = decodedToken._id;
    
            try {
              const response = await axios.get(
                `http://localhost:3000/api/checkwishlist/${userId}/${id}`
              );
              
              setIsInWishlist(response.data.isInWishlist);
            } catch (error) {
              console.error(error);
            }
          }
        };
    
        checkWishlist();
      }, [id]);

    const handleImageClick = (newImage) => {
        setSelectedImage(newImage);
    };
    const wishlist = async () => {
        const token = localStorage.getItem("token");
        if (token) {
          const decodedToken = jwtDecode(token);
          const userId = decodedToken._id;
          try {
            if (isInWishlist) {
              // Remove item from wishlist
              await axios.delete(
                `http://localhost:3000/api/wishlist/${userId}/${id}`
              );
            } else {
              // Add item to wishlist
              await axios.post("http://localhost:3000/api/wishlist", {
                userId,
                id,
                image: product.image,
                title: product.title,
                price: product.price,
              });
            }
    
            // Toggle the state
            setIsInWishlist(!isInWishlist);
          } catch (error) {
            console.error(error);
          }
        }
    }

    const token = localStorage.getItem("token")
    const handleAddToCart = async () =>{
        if(token)
        {
          const { id, title,price,image} = product;
          const decodedToken = jwtDecode(token)
          const userId = decodedToken._id;
          dispatch(addToCart({ id, title,price,image, userId}))
    
          const response = await axios.post('http://localhost:3000/Cart', {
            userId,
            image,
            id,
            title,
            price
          })

          toast.success('Item added to cart', {
            position: 'top-right',
            autoClose: 2000, 
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: true,
            progress: undefined,
          });
          console.log(response.data.message)
        }
        else{
             navigate('/login')
        }
        
      }
    return (
        <>
        
        <div className="rmain">
            <div className="left">
               <div className="inner-left1">
                {product &&
                            product.part.map((part) => (
                                <div key={part.id} className="bbox" onClick={() => handleImageClick(part.image)} >
                                    <img src={part.image} alt="" className="img1" />
                                </div>
                            ))}
               </div>
               <div className="innner-left2">
                {product ? (
              <img src={selectedImage} alt="" />
            ) : (
              <p>Loading...</p>
            )}
        
               </div>
            </div>
            <div className="right">
                <div className="inner-right1">
                <h1>{product ? (product.title):(<p>Loading...</p>)}</h1>
                <h4>${product.price}</h4>
                <p>{product ? (product.description):(<p>Loading...</p>)}</p>
                </div>
                <div className="inner-right2">
                    <p className="iconbtw">
                        &nbsp;&nbsp;
                        <button id="buynow" className="buttn" onClick={handleAddToCart} >Add To Cart</button>
                        &nbsp;&nbsp;
                        <button onClick={wishlist} id="btnwishi" className="buttn"><span id="wishi" style={{ color: colour }}> {isInWishlist ? "♥" : "♡"}</span></button>
                    </p>
                </div>
                <div className="inner-right3">
                    <div className="box">
                        <div className="icon">&nbsp;&nbsp;<img src={icondelivery} className="icon-img"/>&nbsp;&nbsp;</div>
                        <div className="inner-right3-text">
                             <div>Free Delivery</div>
                             <div>Enter your postal code for Delivery Availability</div>
                        </div>
                    </div>
                    <div className="box box1">
                        <div className="icon">&nbsp;&nbsp;<img src={iconreturn} className="icon-img"/>&nbsp;&nbsp;</div>
                        <div className="inner-right3-text">
                             <div>Return Delivery</div>
                             <div>Free 30 Days Delivery Returns. Details</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
       <ToastContainer/>


        </>
    )

}

export default Product