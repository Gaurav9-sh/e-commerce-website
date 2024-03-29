import React from "react";
import "./FastDelivery.css";
import DeliveryBox from "./DeliveryBox";
import delivery from "../../public/images/delivery.png";
import customerService from "../../public/images/customerService.png";
import verified from "../../public/images/verified.png";

const FastDelivery = () => {
  return (
    <div className="fastdelivery" data-aos="zoom-in">
      <DeliveryBox
        image={delivery}
        title="FREE AND FAST DELIVERY"
        about="Free delivery for all orders over $140"
      />
      <DeliveryBox
        image={customerService}
        title="24/7 CUSTOMER SERVICE"
        about="Friendly 24/7 customer support"
      />
      <DeliveryBox
        image={verified}
        title="MONEY BACK GUARANTEE"
        about="We return money within 30 days"
      />
    </div>
  );
};

export default FastDelivery;
