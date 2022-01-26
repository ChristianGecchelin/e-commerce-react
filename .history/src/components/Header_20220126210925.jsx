import React from "react";
import "@styles/Header.scss";
const iconMenu = "@icons/icon_menu.svg";
const logoSale = "@logos/logo_yard_sale.svg";

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
            <img
              src="../assets/icons/icon_shopping_cart.svg"
              alt="shopping cart"
            />
            <div>2</div>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
