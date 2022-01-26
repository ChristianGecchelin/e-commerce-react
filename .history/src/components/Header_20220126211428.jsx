import React from "react";
import "@styles/Header.scss";
import iconMenu from "@icons/icon_menu.svg";
import logoSale from "@logos/logo_yard_sale.svg";
import iconCart from "@icons/icon_shopping_cart.svg";

const Header = () => {
  return (
    <nav>
      <img src={iconMenu} alt="menu" className="menu-image" />

      <div className="navbar-left-container">
        <img src={logoSale} alt="logo" className="navbar-logo" />

        <ul>
          <li>
            <a href="/">All</a>
          </li>
          <li>
            <a href="/">Clothes</a>
          </li>
          <li>
            <a href="/">Electronics</a>
          </li>
          <li>
            <a href="/">Furnitures</a>
          </li>
          <li>
            <a href="/">Toys</a>
          </li>
          <li>
            <a href="/">Others</a>
          </li>
        </ul>
      </div>

      <div className="navbar-right-container">
        <ul>
          <li className="navbar-email">platzi@example.com</li>
          <li className="navbar-shopping-cart">
            <img src={iconCart} alt="shopping cart" />
            <div>2</div>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
