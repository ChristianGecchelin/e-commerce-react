import React from "react";
import "../styles/MyAccount.scss";

const MyAccount = () => {
  return (
    <section className="MyAccount-container">
      <h1 className="title-text">My account</h1>
      <form action="/" className="form-container">
        <div className="form-text-container">
          <label for="name" className="label-text">
            Name
          </label>
          <p className="value-text">Camila Yokoo</p>
          <label for="email" className="label-text">
            Email
          </label>
          <p className="value-text">camilayokoo@gmail.com</p>
          <label for="password" className="label-text">
            Password
          </label>
          <p className="value-text">*********</p>
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
