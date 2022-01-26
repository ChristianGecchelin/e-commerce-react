import React from "react";
import { Children } from "react/cjs/react.production.min";
const Layout = ({ Children }) => {
  return <div className="Layout">{Children}</div>;
};

export default Layout;
