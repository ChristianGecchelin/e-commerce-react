import React from "react";
import "../styles/Login.scss";
const Login = () => {
  return (
    <div className="login">
      <div className="form-container">
        <img
          src="./logos/logos_yard_sale.svg"
          className="logo"
          alt="logo"
        ></img>
        <h1 className="title">Create a new password</h1>
        <p className="subtitle">Enter a new password for your account</p>
        <form action="/" className="form">
          <label for="password" className="label">
            {" "}
            Password
          </label>
          <input
            type="password"
            id="password"
            placeholder="********"
            className="input input-password"
          ></input>
          <label for="new-password" className="label">
            Password
          </label>
          <input
            type="password"
            id="new-password"
            placeholder="*******"
            className="input input-password"
          ></input>
          <input
            type="submit"
            value="confirm"
            className="primary-button login-button"
          ></input>
        </form>
      </div>
    </div>
  );
};

export default Login;
