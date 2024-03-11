import React from "react";
import "./Card.css";

import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "./addtocartSlice";
import { jwtDecode } from "jwt-decode";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Card = (props) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  const handleAddToCart = async () => {
    if (token) {
      const { id, title, price, image } = props;
      const decodedToken = jwtDecode(token);
      const userId = decodedToken._id;
      dispatch(addToCart({ id, title, price, image, userId }));

      const response = await axios.post("https://e-commerce-backend-opis.onrender.com/Cart", {
        userId,
        image,
        id,
        title,
        price,
      });
      toast.success("Item added to cart", {
        position: "top-right",
        autoClose: 2000, // Close the notification after 2000ms (2 seconds)
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
      });
      // console.log(response.data.message)
    } else {
      navigate("/login");
    }
  };

  return (
    <>
      <div className="card">
        <Link to={`/Product/${props.id}`} style={{ textDecoration: "none" }}>
          <div className="cardImage">
            <img src={props.image} alt="" />
          </div>
          <h4
            style={{
              fontFamily: "poppins",
              fontSize: "1.2rem",
              fontWeight: "400",
              marginTop: "1rem",
              color: "black",
            }}
          >
            {props.title}
          </h4>
          <div className="star-specification">
            <div className="specification">
              <p
                style={{
                  fontFamily: "poppins",
                  fontSize: "1.3rem",

                  color: "green",
                }}
              >
                ${props.price}
              </p>{" "}
              <p style={{ fontFamily: "poppins", color: "grey" }}></p>
            </div>
            {/* <div className="starContainer">
            <img src={Star} style={{ height: "1rem", width: "1rem" }} alt="" />
            <img src={Star} style={{ height: "1rem", width: "1rem" }} alt="" />
            <img src={Star} style={{ height: "1rem", width: "1rem" }} alt="" />
            <img src={Star} style={{ height: "1rem", width: "1rem" }} alt="" />
            <img src={Star} style={{ height: "1rem", width: "1rem" }} alt="" />
            
          </div> */}
          </div>
        </Link>
        <button
          type="button"
          class="btn btn-outline-danger"
          onClick={handleAddToCart}
        >
          Add To Cart
        </button>
        <ToastContainer />
      </div>
    </>
  );
};

export default Card;
