import React from "react";
import ProductItem from "../components/ProductItem";
import "../styles/ProductList.scss";

const ProductList = () => {
  return (
    <section className="main-section-container">
      <div className="ProductList-container">
        <ProductItem />
      </div>
    </section>
  );
};

export default ProductList;
