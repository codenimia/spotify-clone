import React from "react";
import "./sidebar.css";
import logo from "../assets/Spotify.jpg";
import SidebarOption from "./sidebarOption";
import HomeIcon from "@material-ui/icons/Home";
import Search from "@material-ui/icons/Search";
import LibraryMusicIcon from "@material-ui/icons/LibraryMusic";
import { useDataLayerValue } from "../datalayer";

const SideBar = () => {
  const [{ playlists }, dispatch] = useDataLayerValue();
  console.log(playlists);
  return (
    <div className="sidebar">
      <img src={logo} alt="logo" className="logo" />
      <SidebarOption Icon={HomeIcon} title="Home" />
      <SidebarOption Icon={Search} title="Search" />
      <SidebarOption Icon={LibraryMusicIcon} title="Your Library" />
      <br />
      <strong className="sidebar_title">PLAYLIST</strong>
      <hr />

      {playlists?.items?.map((playlist, i) => (
        <SidebarOption key={i} title={playlist.name} />
      ))}
    </div>
  );
};

export default SideBar;
