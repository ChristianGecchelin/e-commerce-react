import React from "react";
import "../styles/CreateAccount.scss";

const CreateAccount = () => {
  return (
    <section className="CreateAccount-container">
      <h1 className="title">My account</h1>
      <form action="/" className="form">
        <div>
          <label for="name" className="label">
            Name
          </label>
          <input type="text" id="name" placeholder="Teff" className="input" />
          <label for="email" className="label">
            Email
          </label>
          <input
            type="text"
            id="email"
            placeholder="platzi@example.com"
            className="input"
          />
          <label for="password" className="label">
            Password
          </label>
          <input
            type="password"
            id="password"
            placeholder="*********"
            className="input"
          />
        </div>
        <input
          type="submit"
          value="Create"
          className="primary-button login-button"
        />
      </form>
    </section>
  );
};

export default CreateAccount;
