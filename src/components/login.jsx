import React from "react";
import "./login.css";
import logo from "../assets/Spotify.jpg";
import { loginUrl } from "../spotify";

const Login = () => {
  return (
    <div className="login">
      <img src={logo} alt="" />
      <a href={loginUrl}>LOGIN WITH SPOTIFY</a>
    </div>
  );
};

export default Login;
