import React from "react";
import ProductInfo from "../components/ProductInfo";
import "../styles/ProductDetail.scss";
import iconClose from "@icons/icon_close.svg";
const ProductDetail = () => {
  return (
    <aside className="ProductDetail-container">
      <div className="ProductDetail-close">
        <img src={iconClose} alt="close" />
      </div>
      <ProductInfo />
    </aside>
  );
};

export default ProductDetail;
