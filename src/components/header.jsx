import React from "react";
import "./header.css";
import SearchIcon from "@material-ui/icons/Search";
import { Avatar } from "@material-ui/core";
import { useDataLayerValue } from "../datalayer";

const Header = () => {
  const [{ user }, dispatch] = useDataLayerValue();
  return (
    <div className="header">
      <div className="header_left">
        <SearchIcon />
        <input
          type="text"
          placeholder="Search for Artist, Songs and Much more"
        />
      </div>
      <div className="header_right">
        <Avatar src={user?.images[0]?.url} />
        <h4>{user?.display_name} </h4>
      </div>
    </div>
  );
};

export default Header;

// menit 3:35:14
