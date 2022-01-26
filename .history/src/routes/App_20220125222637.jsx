import React from "react";
import { Routes, BrowserRouter, Route } from "react-router-dom";
import Layout from "../containers/Layout";
import Login from "../containers/Login";
import RecoveryPassword from "../containers/RecoveryPassword";
import "../styles/global.css";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Layout>
          <Route exact path="/Login" element={<Login />} />
          <Route exact path="/Login" element={<RecoveryPassword />} />
        </Layout>
      </Routes>
    </BrowserRouter>
  );
};
export default App;
