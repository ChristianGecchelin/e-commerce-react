import React from "react";
import "../styles/NewPassword.scss";

const NewPassword = () => {
  return (
    <section className="NewPassword-container">
      <img src="./logos/logo_yard_sale.svg" alt="logo" className="logo-image" />
      <h1 className="title-text">Create a new password</h1>
      <p className="subtitle-text">Enter a new passwrd for yue account</p>
      <form action="/" className="form-container">
        <label for="password" className="label">
          Password
        </label>
        <input
          type="password"
          id="password"
          placeholder="*********"
          className="input input-password"
        />
        <label for="new-password" className="label">
          Password
        </label>
        <input
          type="password"
          id="new-password"
          placeholder="*********"
          className="input input-password"
        />
        <input
          type="submit"
          value="Confirm"
          className="primary-button login-button"
        />
      </form>
    </section>
  );
};

export default NewPassword;
