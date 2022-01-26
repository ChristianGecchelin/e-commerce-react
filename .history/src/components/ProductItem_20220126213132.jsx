import React from "react";
import "../styles/ProductItem.scss";
import addCart from "@icons/bt_add_to_cart.svg";
const bike =
  "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940";

const ProductItem = () => {
  return (
    <div className="ProductItem-container">
      <img src={bike} alt="bike" />
      <div className="product-info-container">
        <div>
          <p>$120,00</p>
          <p>Bike</p>
        </div>
        <figure>
          <img src={addCart} alt="cart" />
        </figure>
      </div>
    </div>
  );
};

export default ProductItem;
