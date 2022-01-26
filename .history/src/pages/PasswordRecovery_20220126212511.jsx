import React from "react";
import "../styles/PasswordRecovery.scss";
import yardSale from "@logos/logo_yard_sale.svg";
const PasswordRecovery = () => {
  return (
    <section className="PasswordRecovery-container">
      <img src="./logos/logo_yard_sale.svg" alt="logo" className="logo-image" />
      <h1 className="title-text">Password recovery</h1>
      <p className="subtitle-text">
        Inform the email address used to create your account
      </p>
      <form action="/" className="form-container">
        <label htmlFor="email" className="label-text">
          Email address
        </label>
        <input type="text" id="email" className="input input-email" />
        <input
          type="submit"
          value="Confirm"
          className="primary-button login-button"
        />
      </form>
    </section>
  );
};

export default PasswordRecovery;
