import React from "react";
import "./body.css";
import Header from "./header";
import { useDataLayerValue } from "../datalayer";
import PlayCircleFilledWhiteIcon from "@material-ui/icons/PlayCircleFilledWhite";
import FavoriteIcon from "@material-ui/icons/Favorite";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import Songrow from "./songrow";
const Body = ({ spotify }) => {
  const [{ discoverWeekly }, dispatch] = useDataLayerValue();
  return (
    <div className="body">
      <Header spotify={spotify} />
      <div className="body_info">
        <img src={discoverWeekly?.images[0].url} alt="" />
        <div className="body_infoText">
          <strong>PLAYLIST</strong>
          <h2>Discover Weekly</h2>
          <p>{discoverWeekly?.description}</p>
        </div>
      </div>
      <div className="body_songs">
        <div className="body_icons">
          <PlayCircleFilledWhiteIcon className="body_shuffle" />
          <FavoriteIcon fontSize="large" />
          <MoreHorizIcon />
        </div>
        {discoverWeekly?.tracks.items.map((item) => (
          <Songrow track={item.track} />
        ))}
      </div>
    </div>
  );
};

export default Body;
