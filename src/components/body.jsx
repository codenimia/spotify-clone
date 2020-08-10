import React from "react";
import "./body.css";
import Header from "./header";
const Body = ({ spotify }) => {
  return (
    <div className="body">
      <Header spotify={spotify} />
    </div>
  );
};

export default Body;
