import React from "react";
import { useState } from "react";
import "./product.css"
import image57 from "../images/image57.jpg"
import image59 from "../images/image59.jpg"
import image61 from "../images/image61.jpg"
import image58 from "../images/image58.jpg"
import image63 from "../images/image63.jpg"
import icondelivery from "../images/icondelivery.jpg"
import iconreturn from "../images/iconreturn.jpg"

function Product() {

    const [colour,setColour] = useState("black")
    const [val,setVal] = useState(0)

    function dec() {
        
        if (val != 0) setVal(val-1);


    }
    function add() {

        setVal(val+1);

    }
    function wishlist() {

        setColour((prevColour) => (prevColour === "#DB4444" ? "black" : "#DB4444"));
        

    }

    return (
        <>
        
        <div className="rmain">
            <div className="left">
               <div className="inner-left1">
                <div className="bbox"><img src={image57} className="img1"/></div>
                <div className="bbox"><img src={image58}  className="img1"/></div>
                <div className="bbox"><img src={image59}  className="img1"/></div>
                <div className="bbox"><img src={image61}  className="img1"/></div>
               </div>
               <div className="innner-left2">
                <img src={image63} id="imgmain"/>
               </div>
            </div>
            <div className="right">
                <div className="inner-right1">
                <h1>Product Name</h1>
                <h4>$ 192.00</h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus iure maxime hic cumque, saepe nemo consequuntur animi deserunt at in ea culpa quis, reprehenderit iusto molestias eveniet labore nostrum debitis!</p>
                </div>
                <div className="inner-right2">
                    <p className="iconbtw">
                        <button onClick={dec} className="dec buttn">&#8722;</button>
                        <input type="text" value={val} readOnly className="inputt" />
                        <button onClick={add} className="inc buttn">	&#43;</button>
                        &nbsp;&nbsp;
                        <button id="buynow" className="buttn">Buy Now</button>
                        &nbsp;&nbsp;
                        <button onClick={wishlist} id="btnwishi" className="buttn"><span id="wishi" style={{ color: colour }}>&#9829;</span></button>
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


        </>
    )

}

export default Product