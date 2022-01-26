import React from "react";
import "../styles/MyAccount.scss";

const MyAccount = () => {
  return (
    <section className="MyAccount-container">
      <h1 className="title-text">My account</h1>
      <form action="/" className="form-text-container">
        <div>
          <label for="name" className="label">
            Name
          </label>
          <p className="value">Camila Yokoo</p>
          <label for="email" className="label">
            Email
          </label>
          <p className="value">camilayokoo@gmail.com</p>
          <label for="password" className="label">
            Password
          </label>
          <p className="value">*********</p>
        </div>
        <input
          type="submit"
          value="Edit"
          className="secondary-button login-button"
        />
      </form>
    </section>
  );
};

export default MyAccount;
