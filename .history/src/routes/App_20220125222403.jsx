import React from "react";
import { Routes, BrowserRouter, Route } from "react-router-dom";
import Layout from "../containers/Layout";
import Login from "../containers/Login";
import RecoveryPassword from "../containers/RecoveryPassword";
import "../styles/global.css";

const App = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Login />
        <RecoveryPassword />
      </Layout>
    </BrowserRouter>
  );
};
export default App;
