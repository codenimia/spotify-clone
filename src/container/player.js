import React from "react";
import "./player.css";
import SideBar from "../components/sideBar";
import Body from "../components/body";
import Footer from "../components/footer";

const Player = ({ spotify }) => {
  return (
    <div className="player">
      <div className="player___body">
        <SideBar />
        <Body spotify={spotify} />
        <Footer />
      </div>
    </div>
  );
};

export default Player;
