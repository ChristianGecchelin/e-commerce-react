import React from "react";
import "../styles/OrderItem.scss";
import close from "@icons/icon_close.png";
const bike =
  "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940";
const OrderItem = () => {
  return (
    <div className="OrderItem-container">
      <figure>
        <img src={bike} alt="bike" />
      </figure>
      <p>Bike</p>
      <p>$30,00</p>
      <img src={close} alt="close" />
    </div>
  );
};

export default OrderItem;
