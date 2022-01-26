import React from "react";
import "../styles/SendEmail.scss";

const SendEmail = () => {
  return (
    <section className="SendEmail-container">
      <img src="./logos/logo_yard_sale.svg" alt="logo" className="logo-image" />
      <h1 className="title-text">Email has been sent!</h1>
      <p className="subtitle-text">
        Please check your inbox for instructions on how to reset the password
      </p>
      <div className="email-image">
        <img src="./icons/email.svg" alt="email" />
      </div>
      <button className="primary-button login-button">Login</button>
      <p className="resend-text-container">
        <span>Didn't receive the email?</span>
        <a href="/">Resend</a>
      </p>
    </section>
  );
};

export default SendEmail;
